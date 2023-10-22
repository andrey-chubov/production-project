import { classNames } from 'shared/lib/classNames/classNames';
import {
  MutableRefObject, ReactNode, memo, useRef,
} from 'react';
import { useInfiniteScrol } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScrol({ callback: onScrollEnd, triggerRef, wrapperRef });
  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
