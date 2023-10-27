import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { memo, useCallback } from 'react';
import { ArticleDetailsComment } from 'features/ArticleDetailsComment';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    );
  }
  return (
    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <Button onClick={onBackToList}>{t('Вернуться к списку статей')}</Button>
      <ArticleDetails id={id} />
      <Text title={t('Комментарии')} className={cls.commentTitle} />
      <ArticleDetailsComment id={id} />
    </Page>

  );
});

export default ArticleDetailsPage;
