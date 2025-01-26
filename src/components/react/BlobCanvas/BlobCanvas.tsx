import { useEffect, useRef } from 'react'
import { useControls } from 'leva'
import useMeasure from 'react-use-measure'
import { drawCardinalSpline, generateBlobPoints } from './lib'
import type { Point } from './types'

// Helper to clamp a value within [min, max]
function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max))
}

const TIME_SPEED = 0.001

const BlobCanvasComponent = ({
  width,
  height,
  leftOnly,
}: {
  width: number
  height: number
  leftOnly: boolean
}) => {
  const c = useControls({
    blur: {
      min: 0,
      max: 100,
      step: 1,
      value: 65,
    },
    cx: {
      min: 10,
      max: 1000,
      step: 1,
      value: 0, // width / 2,
    },
    cy: {
      min: 10,
      max: 1000,
      step: 1,
      value: height / 2,
    },
    baseRadius: {
      min: 5,
      max: width,
      value: 180,
    },
    radiusVariation: {
      min: 0,
      max: 1000,
      step: 1,
      value: 140,
    },
    tension: {
      min: 0,
      max: 2,
      step: 0.01,
      value: 0.1,
    },
  })
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const CENTER_POINT = {
    cx: c.cx,
    cy: c.cy,
    baseRadius: c.baseRadius,
    radiusVariation: c.radiusVariation,
    pointCount: 12,
    vertical: false,
    tension: c.tension,
    isClosed: true,
    numOfSegments: 24,
  }

  const leftPoints = generateBlobPoints({
    cx: 50,
    cy: 50,
    pointCount: 24,
    baseRadius: 100,
    radiusVariation: 20,
  })
  const rightPoints = generateBlobPoints({
    cx: width - 50,
    cy: height / 2,
    pointCount: 12,
    baseRadius: c.baseRadius,
    radiusVariation: c.radiusVariation,
  })
  const centerPoints = generateBlobPoints({
    ...CENTER_POINT,
  })

  let animationId
  let time = 0
  let animationStartTime: number | null = null

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    if (!ctx) return
    ctx.clearRect(0, 0, width, height)

    function animate(timestamp: number) {
      time += TIME_SPEED

      const newTension = 0.2 + Math.sin(time) * 6
      if (!canvasRef.current) return
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      if (!ctx) return

      if (!animationStartTime) {
        animationStartTime = timestamp
      }
      const elapsed = timestamp - animationStartTime
      const progress = Math.min(elapsed / 5000, 1) // [0, 1]
      ctx.canvas.style.opacity = `${0 + progress}`
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

      drawCardinalSpline({
        ctx,
        points: centerPoints,
        tension: newTension,
        isClosed: true,
        numOfSegments: 16,
        vertical: true,
      })

      if (!leftOnly) {
        drawCardinalSpline({
          ctx,
          points: rightPoints,
          tension: newTension,
          isClosed: true,
          numOfSegments: 15,
          vertical: false,
        })
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()
  }, [canvasRef, width, height, leftPoints, rightPoints])

  return (
    <canvas
      ref={canvasRef}
      id="myCanvas"
      width={width}
      height={height}
      style={{
        position: 'absolute',
        left: 0,
      }}
    >
      You need a browser that supports HTML5!
    </canvas>
  )
}

type BlobCanvasProps = {
  top?: number
  leftOnly?: boolean
}

export const BlobCanvas = ({ top = 0, leftOnly = false }: BlobCanvasProps) => {
  const [containerRef, bounds] = useMeasure()

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        // inset: -200,
        top,
        // transform: 'translateY(-100px)',
        zIndex: -1,
        color: 'transparent',
        filter: 'blur(500px) saturate(1.5)',
      }}
    >
      {bounds.width && bounds.height && (
        <BlobCanvasComponent
          width={bounds.width}
          height={bounds.height}
          leftOnly={leftOnly}
        />
      )}
    </div>
  )
}
