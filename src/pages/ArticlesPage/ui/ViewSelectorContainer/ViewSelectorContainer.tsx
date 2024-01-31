import { memo } from 'react';

import { ArticleViewSelectors } from '@/features/ArticleViewSelectors';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo(
  ({ className }: ViewSelectorContainerProps) => {
    const { view, onChangeView } = useArticleFilters();

    return (
      <ArticleViewSelectors
        className={className}
        view={view}
        onViewClick={onChangeView}
      />
    );
  },
);
