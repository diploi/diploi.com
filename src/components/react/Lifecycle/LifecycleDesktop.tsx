import useMeasure from 'react-use-measure';
import styles from './Lifecycle.module.scss';
import { animated } from '@react-spring/web';

import * as Icon from '@phosphor-icons/react';
import { type LifecyclePoint } from './data';
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { useLifecycleSprings } from './useLifecycleSprings';
import { drawHalfCirclePath, getX } from './lib';

const CARD_HEIGHT_PX = 160 + 16;
const TIMEOUT_MS = 3000;

type LifecycleDesktopProps = {
  lifecyclePoints: LifecyclePoint[];
};

const LifecycleDesktopCard = ({
  idx,
  width,
  height,
  x,
  y,
  title,
  icon,
  isCurrent,
  description,
  onMouseEnter,
  onMouseLeave,
}: {
  width: number;
  height: number;
  x: number;
  y: number;
  title: string;
  idx: number;
  description: string;
  onMouseEnter: (idx: number) => void;
  onMouseLeave: VoidFunction;
  icon: ReactNode;
  isCurrent: boolean;
}) => {
  const halfWidth = width * 0.5;
  const handleMouseEnter = useCallback(() => {
    onMouseEnter(idx);
  }, [onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    onMouseLeave();
  }, [onMouseLeave]);
  return (
    <article
      className={`${styles.lifecycleDesktopCard} ${isCurrent ? styles.active : ''}`}
      style={{
        width,
        height,
        left: 0,
        transform: `translate(${x - halfWidth}px, ${y - height}px)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div />
      {icon}
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
};

export const LifecycleDesktopSvg = ({
  width,
  height,
  lifecyclePoints,
}: LifecycleDesktopProps & { width: number; height: number }) => {
  const [isManualControl, setIsManualControl] = useState(false);
  const [currentPoint, setCurrentPoint] = useState<number>(0);
  const halfHeight = height * 0.5;

  const svgHeight = 64;
  const svgWidth = width;

  const pointRadius = 32;
  const halfCircleRightPath = drawHalfCirclePath(pointRadius);
  const halfCircleLeftPath = drawHalfCirclePath(pointRadius, true);
  const cardWidth = width / lifecyclePoints.length + 92;

  const marginX = 128;

  const { lineSpring, strokeSprings, pointBgSprings, verticalLineSprings } =
    useLifecycleSprings({
      currentPoint,
      lifecyclePoints,
      width,
      pointRadius,
      marginX,
    });

  const handleMouseEnter = useCallback(
    (idx: number) => {
      !isManualControl && setIsManualControl(true);
      if (idx === currentPoint) return;
      setCurrentPoint(idx);
    },
    [currentPoint, isManualControl, setIsManualControl, setCurrentPoint],
  );

  const handleMouseLeave = useCallback(() => {
    setIsManualControl(false);
  }, [setIsManualControl]);

  useEffect(() => {
    if (isManualControl) return;
    const timeout = setTimeout(() => {
      setCurrentPoint((cur) =>
        cur === lifecyclePoints.length - 1 ? 0 : cur + 1,
      );
    }, TIMEOUT_MS);
    return () => clearTimeout(timeout);
  }, [currentPoint, isManualControl]);

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
            x2={lineSpring.x2}
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
            });

            const lineY2 = idx % 2 === 0 ? -150 : 150 + 64;
            const lineY1 = idx % 2 === 0 ? 0 : pointRadius * 2;

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
                <animated.line
                  x1={circleCenterX}
                  x2={circleCenterX}
                  y1={lineY1}
                  y2={lineY2}
                  stroke="#6650fa"
                  strokeWidth={2}
                  style={verticalLineSprings[idx]}
                />
                <circle
                  key={point.id}
                  r={pointRadius}
                  cx={circleCenterX}
                  cy={pointRadius}
                  fill="transparent"
                  stroke="#36353a"
                  strokeWidth={4}
                />
                <animated.path
                  {...strokeSprings[idx]}
                  strokeWidth={4}
                  strokeDasharray="112, 112"
                  transform={`translate(${circleCenterX - pointRadius}, 0)`}
                  d={halfCircleRightPath}
                  stroke="#6650fa"
                  fill="none"
                />
                <animated.path
                  {...strokeSprings[idx]}
                  strokeWidth={4}
                  strokeDasharray="112, 112"
                  d={halfCircleLeftPath}
                  stroke="#6650fa"
                  fill="none"
                  transform={`translate(${circleCenterX - pointRadius}, 0)`}
                />
              </g>
            );
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
          });

          const PointIcon = Icon[point.icon];
          const isEven = idx % 2 === 0;

          return (
            <div key={`${point.id}-card`}>
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
              <animated.span
                key={`${point.id}-bg`}
                className={styles.pointBg}
                style={{
                  ...pointBgSprings[idx],
                  left: x - pointRadius,
                  top: '50%',
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
                isCurrent={idx === currentPoint}
                y={isEven ? CARD_HEIGHT_PX : height}
                title={point.title}
                // @ts-expect-error
                icon={<PointIcon />}
                description={point.description}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export const LifecycleDesktop = ({
  lifecyclePoints,
}: LifecycleDesktopProps) => {
  const [ref, bounds] = useMeasure();
  const { width, height } = bounds;

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
  );
};
