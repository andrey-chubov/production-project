import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/articleSelectors';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = ({
  className,
}: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('article-details');
  const navigate = useNavigate();
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);
  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button onClick={onBackToList}>{t('Вернуться к списку статей')}</Button>
      {canEdit && (
        <Button onClick={onEditArticle} className={cls.editBtn}>
          {t('Редактировать')}
        </Button>
      )}
    </div>
  );
};
