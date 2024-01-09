import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleDetailsComment } from '@/features/ArticleDetailsComment';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecomendationsList } from '@/features/articleRecomendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import cls from './ArticleDetailsPage.module.scss';

import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article-details');

  // if (!id) {
  //   return null;
  // }

  const articleRatingCard = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRating articleId={id!} />,
    off: () => <Card>{t('Оценка статей скоро появиться')}</Card>,
  });

  return (
    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <VStack gap="16" max>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        {articleRatingCard}
        <ArticleRecomendationsList />
        <ArticleDetailsComment id={id} />
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
