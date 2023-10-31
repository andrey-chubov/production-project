import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { memo, useCallback } from 'react';
import { ArticleDetailsComment } from 'features/ArticleDetailsComment';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleRecommendationsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recommendationsSelectors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticleRecommendations } from '../../model/service/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsRecommendationReducer, getArticleRecommendations } from '../../model/slice/articleDetailsRecomendationsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsRecommendations: articleDetailsRecommendationReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
  const navigate = useNavigate();

  useInitialEffect(() => {
    dispatch(fetchArticleRecommendations());
  });

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    );
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button onClick={onBackToList}>{t('Вернуться к списку статей')}</Button>
        <ArticleDetails id={id} />
        <Text size={TextSize.L} title={t('Рекомендуем')} className={cls.commentTitle} />
        <ArticleList articles={recommendations} isLoading={recommendationsIsLoading} className={cls.recommendations} target='_blank' />
        <Text size={TextSize.L} title={t('Комментарии')} className={cls.commentTitle} />
        <ArticleDetailsComment id={id} />
      </Page>

    </DynamicModuleLoader>

  );
});

export default ArticleDetailsPage;
