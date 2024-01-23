import { ReactElement, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout = memo(
  ({ className, left, content, right }: StickyContentLayoutProps) => (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      {right && <div className={cls.left}>{left}</div>}
      <div className={cls.content}>{content}</div>
      {left && <div className={cls.right}>{right}</div>}
    </div>
  ),
);