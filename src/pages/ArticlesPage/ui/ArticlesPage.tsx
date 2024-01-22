import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { StickyContentLayout } from '@/shared/layouts/StickyConentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

import cls from './ArticlesPage.module.scss';

import { ArticleInfiniteList } from './ArticleInfiniteList/ArticleInfiniteList';
import { FiltersContainer } from './FiltersContainer/FiltersContainer';
import { ViewSelectorContainer } from './ViewSelectorContainer/ViewSelectorContainer';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlePage';
import { articlesPageReducer } from '../model/slice/articlesPageSlice';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch]);

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          content={
            <div
              className={classNames(cls.ArticlesPageRedesigned, {}, [
                className,
              ])}
              data-testid="ArticlesPage"
            >
              <ArticleInfiniteList
                className={cls.list}
                loadMore={onLoadNextPart}
              />
              <ArticlePageGreeting />
            </div>
          }
          left={<ViewSelectorContainer />}
          right={<FiltersContainer />}
        />
      }
      off={
        <div
          className={classNames(cls.ArticlesPage, {}, [className])}
          data-testid="ArticlesPage"
        >
          <ArticleInfiniteList className={cls.list} loadMore={onLoadNextPart} />
          <ArticlePageGreeting />
        </div>
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};
export default ArticlesPage;
