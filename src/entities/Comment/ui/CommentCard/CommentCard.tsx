import { memo } from 'react';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './CommentCard.module.scss';

import { Comment } from '../../model/types/comment';

interface CommentCardProps {
className?: string
comment?: Comment;
isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <VStack gap='8' max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton height={16} width={100} className={cls.username} />
        </div>
        <Skeleton width='100%' height={50} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }
  return (
    <VStack gap='8' max className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink className={cls.header} to={getRouteProfile(comment.user.id)}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text title={comment.user.username} className={cls.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </VStack>
  );
});
