import { Suspense, lazy } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';

import { ArticleDetailsCommentProps } from './ArticleDetailsComment';

const ArticleDetailsCommentLazy = lazy(() => import('./ArticleDetailsComment'));
export const ArticleDetailsCommentAsync = (props: ArticleDetailsCommentProps) => (
  <Suspense fallback={<Skeleton width='100%' height={250} />}>
    <ArticleDetailsCommentLazy {...props} />
  </Suspense>
);
