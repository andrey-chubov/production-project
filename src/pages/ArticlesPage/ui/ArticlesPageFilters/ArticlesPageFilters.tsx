import { useTranslation } from 'react-i18next';

import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelectors } from '@/features/ArticleViewSelectors';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

import cls from './ArticlesPageFilters.module.scss';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = ({
  className,
}: ArticlesPageFiltersProps) => {
  const { t } = useTranslation('article');

  const {
    view,
    sort,
    order,
    search,
    type,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeTab,
  } = useArticleFilters();

  return (
    <div className={classNames('', {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelectors view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input
          placeholder={t('Поиск')}
          onChange={onChangeSearch}
          value={search}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeTab}
        className={cls.tabs}
      />
    </div>
  );
};
