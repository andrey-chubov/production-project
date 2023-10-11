import { lazy } from 'react';

export const ArticleDetailsCommentAsync = lazy(() => new Promise(((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticleDetailsComment')), 1500);
})));
