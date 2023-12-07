import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
className?: string;
articleId: string;
}

const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation('article-details');
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({ userId: userData?.id ?? '', articleId });
  const [rateArticleMutation] = useRateArticle();

  const Rating = data?.[0];

  const handleRateArticleMutation = useCallback((starsCount:number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id ?? '', articleId, rate: starsCount, feedback,
      });
    } catch (error) {
      console.log(error);
    }
  }, [articleId, rateArticleMutation, userData?.id]);

  const onCancel = useCallback((starsCount:number) => {
    handleRateArticleMutation(starsCount);
  }, [handleRateArticleMutation]);

  const onAccept = useCallback((starsCount:number, feedback?: string) => {
    handleRateArticleMutation(starsCount, feedback);
  }, [handleRateArticleMutation]);

  if (isLoading) {
    return <Skeleton width='100%' height={140} />;
  }
  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      className={className}
      rate={Rating?.rate}
      title={t('Оцените статью')}
      feedBackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
      hasFeedback
    />
  );
};

export default ArticleRating;
