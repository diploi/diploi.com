import { useEffect, useState } from 'react';
import { animated, config, useSpring, useSprings } from '@react-spring/web';
import { path as d3Path } from 'd3';
import useMeasure from 'react-use-measure';
import * as Icon from '@phosphor-icons/react';
import styles from './Lifecycle.module.scss';
import { LifecycleDesktop } from './LifecycleDesktop';
import { LifecycleMobile } from './LifecycleMobile';
import { lifecyclePoints } from './data';

const drawHalfCirclePath = (r: number, counterClockwise = false) => {
  const halfCirclePath = d3Path();

  const cx = r;
  const cy = r;

  const radius = r;

  const startAngle = Math.PI;
  const endAngle = 0;

  halfCirclePath.arc(cx, cy, radius, startAngle, endAngle, counterClockwise);

  return halfCirclePath.toString();
};

const getX = ({ ...args }: { itemCount: number; marginX?: number; pointRadius: number; containerWidth: number; idx: number }) => {
  const leftX = (args.marginX || 0) + args.pointRadius;
  const rightX = args.containerWidth - (args.marginX || 0) - args.pointRadius;
  const segment = rightX - leftX;
  const step = args.itemCount > 1 ? segment / (args.itemCount - 1) : 0;
  const x = leftX + step * args.idx;
  return x;
};

export const Lifecycle = () => {
  return (
    <>
      <LifecycleDesktop lifecyclePoints={lifecyclePoints} />
      <LifecycleMobile lifecyclePoints={lifecyclePoints} />
    </>
  );
};
