import * as d3 from 'd3'
import useMeasure from 'react-use-measure'
import styles from './Lifecycle.module.scss'
import { animated, useSpring, config, useSprings } from '@react-spring/web'

import * as Icon from '@phosphor-icons/react'
import { type LifecyclePoint } from './data'
import { useCallback, useEffect, useState } from 'react'

const CARD_HEIGHT_PX = 128

type LifecycleDesktopProps = {
  lifecyclePoints: LifecyclePoint[]
}

const drawHalfCirclePath = (r: number, counterClockwise = false) => {
  const halfCirclePath = d3.path()

  const cx = r
  const cy = r

  const radius = r

  const startAngle = Math.PI
  const endAngle = 0

  halfCirclePath.arc(cx, cy, radius, startAngle, endAngle, counterClockwise)

  return halfCirclePath.toString()
}

const getX = ({
  ...args
}: {
  itemCount: number
  marginX?: number
  pointRadius: number
  containerWidth: number
  idx: number
}) => {
  const leftX = (args.marginX || 0) + args.pointRadius
  const rightX = args.containerWidth - (args.marginX || 0) - args.pointRadius
  const segment = rightX - leftX
  const step = args.itemCount > 1 ? segment / (args.itemCount - 1) : 0
  const x = leftX + step * args.idx
  return x
}

const LifecycleDesktopCard = ({
  idx,
  width,
  height,
  x,
  y,
  title,
  description,
  onMouseEnter,
  onMouseLeave,
}: {
  width: number
  height: number
  x: number
  y: number
  title: string
  idx: number
  description: string
  onMouseEnter: (idx: number) => void
  onMouseLeave: VoidFunction
}) => {
  console.debug('@RENDER LifecycleDesktopCard')
  const halfWidth = width * 0.5
  const handleMouseEnter = useCallback(() => {
    onMouseEnter(idx)
  }, [onMouseEnter])

  const handleMouseLeave = useCallback(() => {
    onMouseLeave()
  }, [onMouseLeave])
  return (
    <article
      className={`card ${styles.lifecycleDesktopCard}`}
      style={{
        width,
        height,
        left: 0,
        // transform: `translateX(${x - halfWidth}px)`,
        transform: `translate(${x - halfWidth}px, ${y - height}px)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h4>{title}</h4>
      <p className="small">{description}</p>
    </article>
  )
}

export const LifecycleDesktopSvg = ({
  width,
  height,
  lifecyclePoints,
}: LifecycleDesktopProps & { width: number; height: number }) => {
  const [isManualControl, setIsManualControl] = useState(false)
  const [currentPoint, setCurrentPoint] = useState<number>(0)
  const halfHeight = height * 0.5

  const svgHeight = 64
  const svgWidth = width

  const pointRadius = 32
  const halfCircleRightPath = drawHalfCirclePath(pointRadius)
  const halfCircleLeftPath = drawHalfCirclePath(pointRadius, true)
  const cardWidth = width / lifecyclePoints.length + 64

  const marginX = 128

  const isLast = currentPoint === lifecyclePoints.length - 1

  const [lineSpring2, lineSpringApi] = useSpring(() => ({
    x2: 0,
    config: { mass: 1, tension: 100, friction: 20 },
  }))

  const [springs, api] = useSprings(lifecyclePoints.length, () => ({
    strokeDashoffset: 112,
    delay: 200,
  }))
  useEffect(() => {
    api.start((idx) => ({
      strokeDashoffset: idx === currentPoint ? 0 : 112,
      config: { ...config.slow, clamp: true },
      delay: currentPoint === 0 ? 250 : 200,
    }))
  }, [currentPoint, api])

  useEffect(() => {
    if (isManualControl) return
    const timeout = setTimeout(() => {
      setCurrentPoint((cur) =>
        cur === lifecyclePoints.length - 1 ? 0 : cur + 1,
      )
    }, 2000)
    return () => clearTimeout(timeout)
  }, [currentPoint, isManualControl])

  useEffect(() => {
    api.start((idx) => ({
      strokeDashoffset: idx === currentPoint ? 0 : 112,
      config: { ...config.slow, clamp: true },
      delay: currentPoint === 0 ? 250 : 200,
    }))

    if (isLast) {
      lineSpringApi.start({
        x2: width,
        config: { mass: 1, tension: 80, friction: 20 },
      })
    } else {
      lineSpringApi.start({
        x2: getX({
          itemCount: lifecyclePoints.length,
          pointRadius: pointRadius,
          marginX,
          containerWidth: width,
          idx: currentPoint,
        }),
      })
    }
  }, [currentPoint, lineSpringApi, lifecyclePoints, pointRadius, width])

  const paddingY = 192

  const handleMouseEnter = useCallback(
    (idx: number) => {
      !isManualControl && setIsManualControl(true)
      if (idx === currentPoint) return
      setCurrentPoint(idx)
    },
    [currentPoint, isManualControl, setIsManualControl, setCurrentPoint],
  )

  const handleMouseLeave = useCallback(() => {
    setIsManualControl(false)
  }, [setIsManualControl])

  return (
    <>
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        style={{
          overflow: 'visible',
          zIndex: -1,
        }}
      >
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="20%" stopColor="#36353a" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="pointBgGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#0b0a0c" />
            <stop offset="100%" stopColor="#0e0d10" />
          </linearGradient>
        </defs>
        <g className="lines">
          <line
            x1={0}
            y1={height * 0.5}
            x2={width}
            y2={height * 0.5}
            stroke="#36353a"
            strokeWidth={2}
          />
          <animated.line
            x2={lineSpring2.x2}
            x1={0}
            y1={height * 0.5}
            y2={height * 0.5}
            stroke="#6650fa"
            strokeWidth={2}
          />
        </g>

        <g transform={`translate(0, ${halfHeight - pointRadius})`}>
          {lifecyclePoints.map((point, idx) => {
            const circleCenterX = getX({
              itemCount: lifecyclePoints.length,
              marginX,
              pointRadius,
              containerWidth: width,
              idx,
            })

            const lineY2 = idx % 2 === 0 ? -67 : 67 + 64
            const lineY1 = idx % 2 === 0 ? 0 : pointRadius * 2

            return (
              <g key={`${point.id}-line`}>
                <line
                  x1={circleCenterX}
                  x2={circleCenterX}
                  y1={lineY1}
                  y2={lineY2}
                  stroke="#36353a"
                  strokeWidth={1}
                  strokeDasharray="8, 12"
                />
                <circle
                  key={point.id}
                  r={pointRadius}
                  cx={circleCenterX}
                  cy={pointRadius}
                  fill="url(#pointBgGradient)"
                  stroke="#36353a"
                />
                <animated.path
                  {...springs[idx]}
                  strokeWidth={2}
                  strokeDasharray="112, 112"
                  transform={`translate(${circleCenterX - pointRadius}, 0)`}
                  d={halfCircleRightPath}
                  stroke="#6650fa"
                  fill="none"
                />
                <animated.path
                  {...springs[idx]}
                  strokeWidth={2}
                  strokeDasharray="112, 112"
                  d={halfCircleLeftPath}
                  stroke="#6650fa"
                  fill="none"
                  transform={`translate(${circleCenterX - pointRadius}, 0)`}
                />
              </g>
            )
          })}
        </g>
      </svg>
      <div className={styles.test}>
        {lifecyclePoints.map((point, idx) => {
          const x = getX({
            itemCount: lifecyclePoints.length,
            marginX,
            pointRadius,
            containerWidth: width,
            idx,
          })

          const PointIcon = Icon[point.icon]
          const isEven = idx % 2 === 0

          return (
            <>
              <div
                key={`${point.id}-icon`}
                className={`${styles.pointIcon} ${idx === currentPoint ? styles.pointIconCurrent : ''}`}
                style={{
                  left: x - pointRadius,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: pointRadius * 2,
                  height: pointRadius * 2,
                }}
              >
                {/* @ts-expect-error */}
                <PointIcon size={24} className={styles.icon} color="white" />
              </div>
              <span
                className={styles.pointBg}
                style={{
                  left: x - pointRadius,
                  top: '50%',
                  transform: `translateY(-50%) ${currentPoint === idx ? 'scale(1)' : 'scale(0)'}`,
                  width: pointRadius * 2,
                  height: pointRadius * 2,
                }}
              />
              <LifecycleDesktopCard
                idx={idx}
                key={`${point.id}-card`}
                width={cardWidth}
                height={CARD_HEIGHT_PX}
                x={x}
                y={isEven ? CARD_HEIGHT_PX : height}
                title={point.title}
                description={point.description}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </>
          )
        })}
      </div>
    </>
  )
}

export const LifecycleDesktop = ({
  lifecyclePoints,
}: LifecycleDesktopProps) => {
  const [ref, bounds] = useMeasure()
  const { width, height } = bounds
  const marginX = 128

  const paddingY = 192

  return (
    <div
      className={styles.root}
      style={{
        width: '100%',
        height: 512,
      }}
    >
      <div ref={ref} style={{ width: '100%', height: '100%' }}>
        {width > 0 && height > 0 && (
          <>
            <LifecycleDesktopSvg
              lifecyclePoints={lifecyclePoints}
              width={width}
              height={height}
            />
          </>
        )}
      </div>
    </div>
  )
}
