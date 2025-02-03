import { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import {
  cubeMeth,
  drawCubeLeft,
  drawCubeRight,
  drawCubeTop,
  drawPackPlaneBottom,
  drawPackPlaneLeft,
} from './lib';
import styles from './DiploiCanvas.module.scss';

const START_OFFSET = 50;
const DURATION_MS = 2500;
const SIDE_LENGTH = 125;

const STROKE_WIDTH = 1;

const STROKE = '#323234';
const BACKGROUND = '#0d0d0e';

const easeOutCubic = (t: number): number => --t * t * t + 1;

const cos30 = Math.cos(Math.PI / 6); // ≈ 0.866
const sin30 = Math.sin(Math.PI / 6); // = 0.5

const draw = (
  ctx: CanvasRenderingContext2D,
  path: Path2D,
  transform: { x: number; y: number },
  fillStyle = 'transparent',
) => {
  ctx.save();
  ctx.translate(transform.x, transform.y);
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.fill(path);
  ctx.lineWidth = STROKE_WIDTH;
  ctx.strokeStyle = STROKE;
  ctx.stroke(path);
  ctx.closePath();
  ctx.restore();
};

const animateCubeAssembly = (
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  sideLength: number,
) => {
  const duration = DURATION_MS;
  let animationStartTime: number | null = null;

  const topStartOffsetY = -START_OFFSET;

  const leftOffsetDistance = START_OFFSET;
  const leftStartOffset = {
    x: -leftOffsetDistance * cos30,
    y: leftOffsetDistance * sin30,
  };

  const rightOffsetDistance = START_OFFSET;
  const rightStartOffset = {
    x: rightOffsetDistance * cos30,
    y: rightOffsetDistance * sin30,
  };

  const s = sideLength;
  const sBackCube = s * 1.5;
  const cube = cubeMeth({ s, startX, startY });
  const backCube = cubeMeth({ s: sBackCube, startX, startY });

  const cubeTopPath = drawCubeTop({ ...cube });
  const cubeLeftPath = drawCubeLeft({ ...cube });
  const cubeRightPath = drawCubeRight({ ...cube });
  const backPlaneBottomPath = drawPackPlaneBottom({ ...backCube });
  const backPlaneLeftPath = drawPackPlaneLeft({ ...backCube });

  const animate = (timestamp: number) => {
    if (!animationStartTime) {
      animationStartTime = timestamp;
    }
    const elapsed = timestamp - animationStartTime;
    const progress = Math.min(elapsed / duration, 1); // [0, 1]
    const easedProgress = easeOutCubic(progress);

    const currentTopOffsetY = topStartOffsetY * (1 - easedProgress);
    const currentLeftOffsetX = leftStartOffset.x * (1 - easedProgress);
    const currentLeftOffsetY = leftStartOffset.y * (1 - easedProgress);
    const currentRightOffsetX = rightStartOffset.x * (1 - easedProgress);
    const currentRightOffsetY = rightStartOffset.y * (1 - easedProgress);

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = STROKE;

    // Back plane right
    draw(ctx, backPlaneBottomPath, {
      x: -currentLeftOffsetX,
      y: -currentLeftOffsetY,
    });

    // Back plane left
    draw(ctx, backPlaneLeftPath, { x: 0, y: -currentTopOffsetY });

    // Top face
    draw(ctx, cubeTopPath, { x: 0, y: currentTopOffsetY }, BACKGROUND);

    // Left face
    draw(
      ctx,
      cubeLeftPath,
      { x: currentLeftOffsetX, y: currentLeftOffsetY },
      BACKGROUND,
    );

    // Right face
    draw(
      ctx,
      cubeRightPath,
      { x: currentRightOffsetX, y: currentRightOffsetY },
      BACKGROUND,
    );

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

export const CanvasComponent = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const sideLength = width < 500 ? 100 : SIDE_LENGTH;
  const w = width; //clamp(width, 100, 800);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;
    ctx.clearRect(0, 0, w / 2, w / 2);

    animateCubeAssembly(ctx, w / 2, w / 2, sideLength);
  }, [canvasRef, width, height]);

  return (
    <canvas
      ref={canvasRef}
      id="myCanvas"
      width={width}
      height={width}
      style={{
        left: 0,
        top: 0,
        position: 'absolute',
        color: 'transparent',
      }}
    >
      You need a browser that supports HTML5!
    </canvas>
  );
};

export const Canvas = () => {
  const [containerRef, bounds] = useMeasure();

  return (
    <div ref={containerRef} className={styles.diploiCanvas}>
      {bounds.width && bounds.height && (
        <CanvasComponent width={bounds.width} height={bounds.height} />
      )}
    </div>
  );
};
