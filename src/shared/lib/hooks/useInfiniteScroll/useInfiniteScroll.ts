import { MutableRefObject, useEffect, useRef } from 'react';

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
    let observer: IntersectionObserver | null = null;
    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        treshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerRef.current);
    }
    return () => {
      if (observer) {
        // eslint-disable-next-line no-debugger
        debugger;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerRef.current);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
