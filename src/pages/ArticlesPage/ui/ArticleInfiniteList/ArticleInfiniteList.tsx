import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';

import {
  Article,
  ArticleView,
  ArticleListItem,
  ArticleListItemSkeleton,
} from '@/entities/Article';
import { ARTICLE_INDEX } from '@/shared/const/localstorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';

import cls from './ArticleInfiniteList.module.scss';

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticleInfiniteListProps {
  className?: string;
  loadMore: () => void;
}

const Footer = memo(() => {
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  const getSkeletons = useCallback(
    (view: ArticleView) =>
      new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_item, index) => (
          <ArticleListItemSkeleton view={view} key={index} className="" />
        )),
    [],
  );

  if (isLoading) {
    return <div className={cls.skeleton}>{getSkeletons(view)}</div>;
  }

  return <div />;
});

const Header = memo(() => <ArticlesPageFilters />);

const ItemContainerComp =
  (view: ArticleView) =>
  ({
    height,
    width,
    index,
  }: {
    height: number;
    width: number;
    index: number;
  }) => (
    <div className={cls.itemContainer}>
      <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
    </div>
  );

export const ArticleInfiniteList = ({
  className,
  loadMore,
}: ArticleInfiniteListProps) => {
  const { t } = useTranslation('article');
  const articles = useSelector(getArticles.selectAll);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const initMostIndex = Number(localStorage.getItem(ARTICLE_INDEX)) || 0; // <= добавить проверки на  NaN и индекс вне  диапозона.

  if (!isLoading && !articles?.length) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Text title={t('Статьи не найдены')} size={TextSize.L} />
      </div>
    );
  }

  if (error) {
    return <Text title={t('Произошла ошибка')} />;
  }

  const itemRender = (index: number, item: Article) => (
    <ArticleListItem
      article={item}
      view={view}
      key={item.id}
      className={cls.card}
      index={index}
    />
  );

  if (view === ArticleView.SMALL) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div
            className={classNames(cls.ArticleInfiniteList, {}, [
              className,
              cls[view],
            ])}
            data-testid="ArticleInfinityList"
          >
            <VirtuosoGrid
              totalCount={articles.length}
              data={articles}
              initialTopMostItemIndex={initMostIndex}
              itemContent={itemRender}
              listClassName={cls.itemWrapper}
              endReached={loadMore}
              components={{
                ScrollSeekPlaceholder: ItemContainerComp(view),
              }}
              scrollSeekConfiguration={{
                enter: (velocity) => Math.abs(velocity) > 200,
                exit: (velocity) => Math.abs(velocity) < 30,
              }}
            />
          </div>
        }
        off={
          <div
            className={classNames(cls.ArticleInfiniteList, {}, [
              className,
              cls[view],
            ])}
            data-testid="ArticleInfinityList"
          >
            <VirtuosoGrid
              totalCount={articles.length}
              data={articles}
              initialTopMostItemIndex={initMostIndex}
              itemContent={itemRender}
              listClassName={cls.itemWrapper}
              endReached={loadMore}
              components={{
                Header,
                ScrollSeekPlaceholder: ItemContainerComp(view),
              }}
              scrollSeekConfiguration={{
                enter: (velocity) => Math.abs(velocity) > 200,
                exit: (velocity) => Math.abs(velocity) < 30,
              }}
            />
          </div>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div
          className={classNames(cls.ArticleInfiniteList, {}, [
            className,
            cls[view],
          ])}
        >
          <Virtuoso
            style={{ height: '100%' }}
            data={articles}
            itemContent={itemRender}
            endReached={loadMore}
            initialTopMostItemIndex={initMostIndex}
            components={{
              Footer,
            }}
          />
        </div>
      }
      off={
        <div
          className={classNames(cls.ArticleInfiniteList, {}, [
            className,
            cls[view],
          ])}
        >
          <Virtuoso
            style={{ height: '100%' }}
            data={articles}
            itemContent={itemRender}
            endReached={loadMore}
            initialTopMostItemIndex={initMostIndex}
            components={{
              Header,
              Footer,
            }}
          />
        </div>
      }
    />
  );
};
