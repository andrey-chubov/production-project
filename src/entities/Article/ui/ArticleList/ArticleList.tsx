import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3).fill(0)
  .map((item, index) => (<ArticleListItemSkeleton view={view} key={index} className={cls.card} />));

export const ArticleList = memo(
  ({
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
  }: ArticleListProps) => {
    const renderArticle = (article: Article) => (
      <ArticleListItem article={article} view={view} className={cls.card} key={article.id} />
    );

    return (
      <div className={classNames('', {}, [className, cls[view]])}>

        {articles.length > 0 ? articles.map(renderArticle) : null}
        {isLoading && getSkeletons(view) }
      </div>
    );
  },
);
