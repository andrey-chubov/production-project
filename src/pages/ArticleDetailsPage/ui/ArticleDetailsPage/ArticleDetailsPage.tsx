import { Suspense, memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleDetailsComment } from '@/features/ArticleDetailsComment';
import { ArticleReccomendationsList } from '@/features/articleReccomendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page/Page';
import { Loader } from '@/shared/ui/Loader/Loader';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <VStack gap='16' max>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleReccomendationsList />
        <Suspense fallback={<Loader />}>
          <ArticleDetailsComment id={id} />
        </Suspense>
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
