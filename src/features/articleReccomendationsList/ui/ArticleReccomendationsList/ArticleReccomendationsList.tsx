import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
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
  const { isLoading, data, error } = useArticleRecommendationsList(3);

  if (!isLoading && error) {
    return (
      <div className={classNames('', {}, [className])}>
        <Text title={t('Обновите страницу')} size={TextSize.L} />
      </div>
    );
  }

  return (
    <VStack gap='8' className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Рекомендуем')}
      />
      <ArticleList
        articles={data}
        target='_blank'
      />

    </VStack>
  );
};
