import type { ReactNode } from 'react';
import styles from './Bullets.module.scss';

interface BulletsItemProps {
  children: ReactNode;
  className?: string;
}

export const BulletsItem = ({ children, className }: BulletsItemProps) => (
  <li className={[styles.item, className].filter(Boolean).join(' ')}>{children}</li>
);
