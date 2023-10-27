import { MutableRefObject, useEffect } from 'react';

export interface UseInfinteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScrol({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfinteScrollOptions) {
  useEffect(() => {
    const wrapperRefElement = wrapperRef.current;
    const triggerRefElement = triggerRef.current;
    let observer: IntersectionObserver | null = null;
    if (callback) {
      const options = {
        root: wrapperRefElement,
        rootMargin: '0px',
        treshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerRefElement);
    }
    return () => {
      if (observer) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerRefElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
