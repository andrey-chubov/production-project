import { memo, useCallback } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';

import cls from './AdditionalContainer.module.scss';

interface AdditionalContainerProps {
  className?: string;
}

export const AdditionalContainer = memo(
  ({ className }: AdditionalContainerProps) => {
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);

    const onEditArticle = useCallback(
      () => navigate(getRouteArticleEdit(article?.id || '')),
      [article?.id, navigate],
    );

    if (!article) {
      return null;
    }

    return (
      <Card padding="24" border="round" className={cls.card}>
        <ArticleAdditionalInfo
          author={article.user}
          className={className}
          createdAt={article.createdAt}
          views={article.views}
          onEdit={onEditArticle}
        />
      </Card>
    );
  },
);
