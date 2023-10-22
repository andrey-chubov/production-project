import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
  Article,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(
  ({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
      <>
        <Text text={String(article.views)} className={cls.views} />
        <Icon Svg={EyeIcon} />
      </>
    );

    const onOpenArticle = useCallback(() => {
      navigate(`${RoutePath.articles_details}${article.id}`);
    }, [article.id, navigate]);
    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (item) => item.type === 'TEXT',
      ) as ArticleTextBlock;
      return (
        <div
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
            <img src={article.img} alt={article.title} className={cls.img} />
            {textBlock && (
              <ArticleTextBlockComponent
                block={textBlock}
                className={cls.textBlock}
              />
            )}
            <div className={cls.footer}>
              <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
                {t('Читать далее...')}
              </Button>
              {views}
            </div>
          </Card>
        </div>
      );
    }
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card onClick={onOpenArticle}>
          <div className={cls.imageWrapper}>
            <img src={article.img} alt={article.title} className={cls.img} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <Text title={article.title} className={cls.title} />
        </Card>
      </div>
    );
  },
);
