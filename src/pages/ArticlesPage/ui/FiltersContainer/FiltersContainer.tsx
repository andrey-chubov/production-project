import { memo } from 'react';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo(({ className }: FiltersContainerProps) => {
  const {
    sort,
    order,
    search,
    type,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeTab,
  } = useArticleFilters();
  return (
    <ArticlesFilters
      className={className}
      sort={sort}
      search={search}
      type={type}
      order={order}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
      onChangeSort={onChangeSort}
      onChangeTab={onChangeTab}
    />
  );
});
