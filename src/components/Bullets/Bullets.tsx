import type { CSSProperties, ReactNode } from 'react';
import { useMemo } from 'react';
import styles from './Bullets.module.scss';

interface BulletsProps {
  children: ReactNode;
  className?: string;
  start?: number;
  style?: CSSProperties;
  total: number;
}

export const Bullets = ({ children, className, start = 0, style, total }: BulletsProps) => {
  const customStyle = useMemo<CSSProperties>(() => {
    return {
      ...(style ?? {}),
      '--start': start,
      '--total': total,
    } as CSSProperties;
  }, [style, start, total]);

  return (
    <ul className={[styles.bullets, className, 'bullets'].filter(Boolean).join(' ')} style={customStyle}>
      {children}
    </ul>
  );
};
