import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  ArticleSortField,
  ArticleType,
  ArticleView,
} from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelectors } from '@/features/ArticleViewSelectors';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

import cls from './ArticlesPageFilters.module.scss';

import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = ({
  className,
}: ArticlesPageFiltersProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      dispatch(articlesPageActions.setView(newView));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );
  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );
  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );
  const onChangeSearch = useCallback(
    (word: string) => {
      dispatch(articlesPageActions.setSearch(word));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch],
  );

  const onChangeTab = useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setType(value));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);
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
      <ArticleTypeTabs value={type} onChangeType={onChangeTab} className={cls.tabs} />
    </div>
  );
};
