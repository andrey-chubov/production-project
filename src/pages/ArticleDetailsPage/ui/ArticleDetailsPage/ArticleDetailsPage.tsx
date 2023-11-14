import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { memo } from 'react';
import { ArticleDetailsComment } from 'features/ArticleDetailsComment';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleReccomendationsList } from 'features/articleReccomendationsList';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    );
  }
  return (
    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <VStack gap='16' max>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleReccomendationsList />
        <ArticleDetailsComment id={id} />
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
