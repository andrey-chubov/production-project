import { HTMLAttributeAnchorTarget, memo } from 'react';

import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { ARTICLE_INDEX } from '@/shared/const/localstorage';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleListItem.module.scss';

import { ArticleView } from '../../model/const/const';
import {
  Article,
  ArticleTextBlock,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  index?: number
}

export const ArticleListItem = memo(
  ({
    className, article, view, target, index,
  }: ArticleListItemProps) => {
    const { t } = useTranslation('article');
    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
      <>
        <Text text={String(article.views)} className={cls.views} />
        <Icon Svg={EyeIcon} />
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
        <div
          data-testid='ArticleListItem'
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card>
            <div className={cls.header}>
              <Avatar size={30} src={article.user.avatar} />
              <Text text={article.user.username} className={cls.username} />
              <Text text={article.createdAt} className={cls.date} />
            </div>
            <Text title={article.title} className={cls.title} />
            {types}
            <AppImage
              src={article.img}
              alt={article.title}
              className={cls.img}
              fallback={<Skeleton width='100%' height={250} />}
            />
            {textBlock && (
              <ArticleTextBlockComponent
                block={textBlock}
                className={cls.textBlock}
              />
            )}
            <div className={cls.footer}>
              <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onClick}>
                  {t('Читать далее...')}
                </Button>
              </AppLink>

              {views}
            </div>
          </Card>
        </div>
      );
    }
    return (
      <AppLink
        data-testid='ArticleListItem'
        to={getRouteArticleDetails(article.id)}
        className={classNames('', {}, [className, cls[view]])}
        target={target}
        onClick={onClick}
      >
        <Card>
          <div className={cls.imageWrapper}>
            <AppImage
              src={article.img}
              alt={article.title}
              className={cls.img}
              fallback={<Skeleton width={200} height={200} />}
            />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <Text title={article.title} className={cls.title} />
        </Card>
      </AppLink>
    );
  },
);
