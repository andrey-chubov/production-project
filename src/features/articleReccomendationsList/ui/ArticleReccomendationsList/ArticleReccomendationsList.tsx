import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleReccomendationsListProps {
    className?: string;
}

export const ArticleReccomendationsList = (props: ArticleReccomendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap='8' className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Рекомендуем')}
      />
      <ArticleList
        articles={articles}
        target='_blank'
        virtulized={false}
      />

    </VStack>
  );
};
