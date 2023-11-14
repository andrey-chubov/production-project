import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { getArticlesPageIsLoading, getArticlesPageError, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
className?: string
}

export const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
  const { t } = useTranslation('articles');
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  if (error) {
    return <Text title={t('Произошла ошибка')} />;
  }

  return (
    <ArticleList
      view={view}
      articles={articles}
      isLoading={isLoading}
      className={className}
    />
  );
};
