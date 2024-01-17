import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecomendationsListProps {
  className?: string;
}

export const ArticleRecomendationsList = (
  props: ArticleRecomendationsListProps,
) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack
      gap="8"
      className={classNames('', {}, [className])}
      data-testid="ArticleRecommendationList"
    >
      <Text size={TextSize.L} title={t('Рекомендуем')} />
      <ArticleList articles={articles} target="_blank" />
    </VStack>
  );
};
