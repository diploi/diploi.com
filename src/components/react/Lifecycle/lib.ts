import * as d3 from 'd3';

export const getX = ({
  ...args
}: {
  itemCount: number;
  marginX?: number;
  pointRadius: number;
  containerWidth: number;
  idx: number;
}) => {
  const leftX = (args.marginX || 0) + args.pointRadius;
  const rightX = args.containerWidth - (args.marginX || 0) - args.pointRadius;
  const segment = rightX - leftX;
  const step = args.itemCount > 1 ? segment / (args.itemCount - 1) : 0;
  const x = leftX + step * args.idx;
  return x;
};

export const drawHalfCirclePath = (r: number, counterClockwise = false) => {
  const halfCirclePath = d3.path();

  const cx = r;
  const cy = r;

  const radius = r;

  const startAngle = Math.PI;
  const endAngle = 0;

  halfCirclePath.arc(cx, cy, radius, startAngle, endAngle, counterClockwise);

  return halfCirclePath.toString();
};
