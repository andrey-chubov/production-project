import { memo } from 'react';

import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleDetailsComment } from '@/features/ArticleDetailsComment';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecomendationsList } from '@/features/articleRecomendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import cls from './ArticleDetailsPage.module.scss';

import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();

  // if (!id) {
  //   return null;
  // }

  return (
    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <VStack gap="16" max>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id!} />
        <ArticleRecomendationsList />
        <ArticleDetailsComment id={id} />
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
