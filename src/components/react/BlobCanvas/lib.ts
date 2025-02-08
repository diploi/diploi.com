import { createNoise3D } from 'simplex-noise';


type GenerateBlobPoints = {
  cx: number;
  cy: number;
  pointCount: number;
  baseRadius: number;
  radiusVariation: number;
};

const noiseScale = 100;
const noise3D = createNoise3D();

export function generateBlobPoints({
  cx,
  cy,
  pointCount,
  baseRadius,
  radiusVariation,
  time,
}: GenerateBlobPoints & { time: number }) {
  const points = [];
  for (let i = 0; i < pointCount; i++) {
    const angle = Math.PI * 2 * (i / pointCount);
    const nx = Math.cos(angle) * noiseScale;
    const ny = Math.sin(angle) * noiseScale;

    // Use time as the third dimension so noise evolves over time
    const noiseVal = noise3D(nx, ny, time); // returns a value in [-1, 1]
    const radiusOffset = radiusVariation * noiseVal * 5;

    // Now the radius is always between baseRadius and baseRadius + radiusVariation
    const r = baseRadius + radiusOffset;

    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points.push({ x, y });
  }
  return points;
}

type DrawCardinalSplineOptions = {
  ctx: CanvasRenderingContext2D;
  points: { x: number; y: number }[];
  tension?: number;
  isClosed?: boolean;
  numOfSegments?: number;
  color?: string;
};

export const drawCardinalSpline = ({
  ctx,
  points,
  tension = 0.5,
  isClosed = true,
  numOfSegments = 16,
  color = '#842EFF',
}: DrawCardinalSplineOptions) => {
  let pts = points.map((p) => [p.x, p.y]);

  // If closed, add the first points to the end and vice versa
  // so that the spline loops around nicely
  if (isClosed) {
    pts.unshift(pts[pts.length - 1]);
    pts.push(pts[1]);
  } else {
    // for open curves, we can optionally pad with first/last duplicates
    pts = [[pts[0][0], pts[0][1]]]
      .concat(pts)
      .concat([[pts[pts.length - 1][0], pts[pts.length - 1][1]]]);
  }

  // tension scale factor
  const t = tension;

  ctx.beginPath();
  // Move to the first actual point
  ctx.moveTo(pts[1][0], pts[1][1]);

  // For every pair of points
  for (let i = 1; i < pts.length - 2; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2];

    for (let j = 0; j < numOfSegments; j++) {
      const s = j / numOfSegments;

      const ps = s * s;
      const pss = s * ps;

      const m0x = (p2[0] - p0[0]) * t;
      const m0y = (p2[1] - p0[1]) * t;
      const m1x = (p3[0] - p1[0]) * t;
      const m1y = (p3[1] - p1[1]) * t;

      const a = 2 * pss - 3 * ps + 1;
      const b = -2 * pss + 3 * ps;
      const c = pss - 2 * ps + s;
      const d = pss - ps;

      const x = a * p1[0] + b * p2[0] + c * m0x + d * m1x;
      const y = a * p1[1] + b * p2[1] + c * m0y + d * m1y;

      ctx.lineTo(x, y);
    }
  }

  if (isClosed) {
    ctx.closePath();
  }

  ctx.fillStyle = color;

  ctx.fill();
};

type BlobConfig = Omit<GenerateBlobPoints, 'time'> & {
  tension: number;
};

type AnimateBlobs = {
  ctx: CanvasRenderingContext2D;
  initialLeftBlob?: BlobConfig;
  initialRightBlob?: BlobConfig;
  leftOnly?: boolean;
};

export const INITIAL_LEFT_BLOB_DEFAULT: BlobConfig = {
  pointCount: 12,
  cx: 0,
  cy: 0,
  baseRadius: 250,
  radiusVariation: 50,
  tension: 0.5,
};
export const INITIAL_RIGHT_BLOB_DEFAULT: BlobConfig = {
  pointCount: 12,
  cx: 0,
  cy: 0,
  baseRadius: 250,
  radiusVariation: 50,
  tension: 0.5,
};

const TIME_SPEED = 0.0005;
const NUM_OF_SEGMENTS = 20;
const TENSION = 2;

const drawThreeSplineGroup = (
  ctx: CanvasRenderingContext2D,
  blobConfig: BlobConfig,
  time: number,
  color: { large: string; medium: string; small: string },
  cx: number,
  cy: number,
) => {
  const pointsSmall = generateBlobPoints({
    ...blobConfig,
    baseRadius: blobConfig.baseRadius,
    cy,
    cx,
    time,
  });
  const pointsMedium = generateBlobPoints({
    ...blobConfig,
    baseRadius: blobConfig.baseRadius * 1.5,
    cy,
    cx,
    time,
  });

  const pointsLarge = generateBlobPoints({
    ...blobConfig,
    baseRadius: blobConfig.baseRadius * 2,
    cy,
    cx,
    time,
  });

  drawCardinalSpline({
    ctx,
    points: pointsLarge,
    tension: TENSION,
    numOfSegments: NUM_OF_SEGMENTS,
    color: color.large,
  });
  drawCardinalSpline({
    ctx,
    points: pointsMedium,
    tension: TENSION,
    isClosed: true,
    numOfSegments: NUM_OF_SEGMENTS,
    color: color.medium,
  });
  drawCardinalSpline({
    ctx,
    points: pointsSmall,
    tension: TENSION,
    numOfSegments: NUM_OF_SEGMENTS,
    color: color.small,
  });
};

export const animateBlobs = ({
  ctx,
  initialLeftBlob = INITIAL_LEFT_BLOB_DEFAULT,
  initialRightBlob = INITIAL_RIGHT_BLOB_DEFAULT,
  leftOnly,
}: AnimateBlobs) => {
  let time = 0;

  const blue = '#341456';
  const purple = '#8E24FF';
  const pink = '#FF24E9';

  function animate() {
    time += TIME_SPEED;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const cxL = 0;
    const cyL = 0;
    drawThreeSplineGroup(
      ctx,
      initialLeftBlob,
      time,
      {
        large: blue,
        medium: purple,
        small: pink,
      },
      cxL,
      cyL,
    );

    if (!leftOnly) {
      const cyR = ctx.canvas.height;
      const cxR = ctx.canvas.width;
      drawThreeSplineGroup(
        ctx,
        initialRightBlob,
        time,
        {
          large: blue,
          medium: purple,
          small: pink,
        },
        cxR,
        cyR,
      );
    }
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
};
