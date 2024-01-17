import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Overlay = ({ className, onClick }: OverlayProps) => (
  <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
);
