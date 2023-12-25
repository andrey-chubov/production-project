import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';

import {
  useGetProfileRating,
  useProfileRating,
} from '../../api/profileRatingApi';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = ({ className, profileId }: ProfileRatingProps) => {
  const { t } = useTranslation('profile');
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? '',
  });
  const [profileRatingMutation] = useProfileRating();

  const rating = data?.[0];

  const handleProfileRatingMutation = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        profileRatingMutation({
          rate: starsCount,
          feedback,
          profileId,
          userId: userData?.id ?? '',
        });
      } catch (error) {
        console.log(error);
      }
    },
    [profileId, profileRatingMutation, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleProfileRatingMutation(starsCount, feedback);
    },
    [handleProfileRatingMutation],
  );
  const onCancel = useCallback(
    (starsCount: number) => {
      handleProfileRatingMutation(starsCount);
    },
    [handleProfileRatingMutation],
  );

  if (isLoading) {
    return null;
  }
  return (
    <RatingCard
      className={className}
      rate={rating?.rate}
      onAccept={onAccept}
      onCancel={onCancel}
      title={t('Оцените профиль')}
      feedBackTitle={t('Оставьте отзыв о профиле если желаете')}
      hasFeedback
    />
  );
};

export default ProfileRating;
