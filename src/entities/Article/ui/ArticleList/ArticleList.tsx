import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3).fill(0)
  .map((item, index) => (<ArticleListItemSkeleton view={view} key={index} className={cls.card} />));

export const ArticleList = memo(
  ({
    className,
    articles,
    isLoading,
    target,
    view = ArticleView.SMALL,
  }: ArticleListProps) => {
    const { t } = useTranslation('article');
    const renderArticle = (article: Article) => (
      <ArticleListItem article={article} view={view} className={cls.card} key={article.id} target={target} />
    );

    if (!isLoading && !articles.length) {
      return (
        <div className={classNames('', {}, [className, cls[view]])}>
          <Text title={t('Статьи не найдены')} size={TextSize.L} />
        </div>
      );
    }

    return (
      <div className={classNames('', {}, [className, cls[view]])}>

        {articles.length > 0 ? articles.map(renderArticle) : null}
        {isLoading && getSkeletons(view) }
      </div>
    );
  },
);
