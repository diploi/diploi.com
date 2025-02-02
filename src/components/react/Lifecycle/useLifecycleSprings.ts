import { useSpring, useSprings } from "@react-spring/web";
import { useEffect } from "react";
import { getX } from "./lib";

type UseLifecycleSpringsParams ={
  currentPoint: number;
  lifecyclePoints: any[]; // Adjust with a proper type if available
  width: number;
  pointRadius: number;
  marginX: number;
  strokeOffset?: number;
  activeDelay?: number;
  defaultDelay?: number;
  strokeConfig?: Record<string, any>;
}

export const useLifecycleSprings = ({
  currentPoint,
  lifecyclePoints,
  width,
  pointRadius,
  marginX,
  strokeOffset = 112,
  activeDelay = 250,
  defaultDelay = 200,
  strokeConfig = { tension: 100, friction: 20, clamp: true },
}: UseLifecycleSpringsParams) => {
  const [lineSpring, lineSpringApi] = useSpring(() => ({
    x2: 0,
    config: { mass: 1, tension: 100, friction: 20 },
  }));

  const [strokeSprings, strokeApi] = useSprings(lifecyclePoints.length, () => ({
    strokeDashoffset: strokeOffset,
    delay: defaultDelay,
  }));

  const [pointBgSprings, pointBgApi] = useSprings(
    lifecyclePoints.length,
    () => ({
      transform: `translateY(-50%) scale(0)`,
      config: { mass: 1, tension: 100, friction: 20 },
    }),
  );

  useEffect(() => {
    strokeApi.start((idx) => ({
      strokeDashoffset: idx === currentPoint ? 0 : strokeOffset,
      config: strokeConfig,
      delay: currentPoint === 0 ? activeDelay : defaultDelay,
    }));

    pointBgApi.start((idx) => ({
      transform: `translateY(-50%) ${currentPoint === idx ? 'scale(1)' : 'scale(0)'}`,
    }));

    const isLast = currentPoint === lifecyclePoints.length - 1;
    if (isLast) {
      lineSpringApi.start({
        x2: width,
        config: { mass: 1, tension: 80, friction: 20 },
      });
    } else {
      lineSpringApi.start({
        x2: getX({
          itemCount: lifecyclePoints.length,
          pointRadius,
          marginX,
          containerWidth: width,
          idx: currentPoint,
        }),
      });
    }
  }, [
    currentPoint,
    lifecyclePoints,
    width,
    pointRadius,
    marginX,
    strokeOffset,
    activeDelay,
    defaultDelay,
    strokeConfig,
    lineSpringApi,
    strokeApi,
    pointBgApi,
  ]);

  return { lineSpring, strokeSprings, pointBgSprings };
};
