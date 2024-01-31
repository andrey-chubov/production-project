import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

import cls from './ArticleRecommendationList.module.scss';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecomendationsListProps {
  className?: string;
}

export const ArticleRecomendationsList = (
  props: ArticleRecomendationsListProps,
) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack
      gap="8"
      className={classNames(cls.ArticleRecomendationList, {}, [className])}
      data-testid="ArticleRecommendationList"
    >
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Text size="l" title={t('Рекомендуем')} />}
        off={<TextDeprecated size={TextSize.L} title={t('Рекомендуем')} />}
      />

      <ArticleList articles={articles} target="_blank" />
    </VStack>
  );
};
