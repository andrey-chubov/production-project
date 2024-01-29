import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleDetailsComment } from '@/features/ArticleDetailsComment';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecomendationsList } from '@/features/articleRecomendationsList';
import { StickyContentLayout } from '@/shared/layouts/StickyConentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import cls from './ArticleDetailsPage.module.scss';

import { AdditionalContainer } from '../AdditionalContainer/AdditionalContainer';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  // if (!id) {
  //   return null;
  // }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          content={
            <Page
              className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
              <VStack gap="16" max>
                <DetailsContainer />
                <ArticleDetailsPageHeader />
                <ArticleRating articleId={id!} />
                <ArticleRecomendationsList className={cls.list} />
                <ArticleDetailsComment id={id} />
              </VStack>
            </Page>
          }
          right={<AdditionalContainer />}
        />
      }
      off={
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
          <VStack gap="16" max>
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id} />
            <ToggleFeatures
              feature="isArticleRatingEnabled"
              on={<ArticleRating articleId={id!} />}
              off={<Card>{t('Оценка статей скоро появиться')}</Card>}
            />
            <ArticleRecomendationsList />
            <ArticleDetailsComment id={id} />
          </VStack>
        </Page>
      }
    />
  );
});

export default ArticleDetailsPage;
