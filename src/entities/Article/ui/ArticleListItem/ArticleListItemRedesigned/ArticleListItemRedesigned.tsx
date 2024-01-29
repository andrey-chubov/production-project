import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ARTICLE_INDEX } from '@/shared/const/localstorage';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './ArticleListItemRedesigned.module.scss';

import { ArticleView } from '../../../model/const/const';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleListItemProps } from '../ArticleListItem';

export const ArticleListItemRedesigned = memo(
  ({ className, article, view, target, index }: ArticleListItemProps) => {
    const { t } = useTranslation('article');

    const views = (
      <HStack gap="8">
        <Icon Svg={EyeIcon} />
        <Text text={String(article.views)} className={cls.views} />
      </HStack>
    );

    const userInfo = (
      <>
        <Avatar size={32} src={article.user.avatar} className={cls.avatar} />
        <Text bold text={article.user.username} />
      </>
    );

    const onClick = () => {
      localStorage.setItem(ARTICLE_INDEX, JSON.stringify(index));
    };

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (item) => item.type === 'TEXT',
      ) as ArticleTextBlock;

      return (
        <Card
          data-testid="ArticleListItem"
          padding="24"
          max
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <VStack gap="16" max>
            <HStack max gap="8">
              {userInfo}
              <Text text={article.createdAt} />
            </HStack>
            <Text bold title={article.title} />
            <Text title={article.subtitle} size="s" />
            <AppImage
              src={article.img}
              alt={article.title}
              className={cls.img}
              fallback={<Skeleton width="100%" height={250} />}
            />
            {textBlock?.paragraphs && (
              <Text
                className={cls.textBlock}
                text={textBlock.paragraphs.slice(0, 2).join(' ')}
              />
            )}
            <HStack max justify="between">
              <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                <Button variant="outline" onClick={onClick}>
                  {t('Читать далее...')}
                </Button>
              </AppLink>
              {views}
            </HStack>
          </VStack>
        </Card>
      );
    }
    return (
      <AppLink
        data-testid="ArticleListItem"
        target={target}
        to={getRouteArticleDetails(article.id)}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card} border="partial" padding="0">
          <AppImage
            fallback={<Skeleton width="100%" height={200} />}
            alt={article.title}
            src={article.img}
            className={cls.img}
          />
          <VStack className={cls.info} gap="4">
            <Text title={article.title} className={cls.title} />
            <VStack gap="4" className={cls.footer} max>
              <HStack justify="between" max>
                <Text text={article.createdAt} className={cls.date} />
                {views}
              </HStack>
              <HStack gap="4">{userInfo}</HStack>
            </VStack>
          </VStack>
        </Card>
      </AppLink>
    );
  },
);
