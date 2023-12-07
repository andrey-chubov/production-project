import { Suspense, lazy } from 'react';
import { ArticleDetailsCommentProps } from './ArticleDetailsComment';
import { Skeleton } from '@/shared/ui/Skeleton';

const ArticleDetailsCommentLazy = lazy(() => import('./ArticleDetailsComment'));
export const ArticleDetailsCommentAsync = (props: ArticleDetailsCommentProps) => (
  <Suspense fallback={<Skeleton width='100%' height={250} />}>
    <ArticleDetailsCommentLazy {...props} />
  </Suspense>
);
