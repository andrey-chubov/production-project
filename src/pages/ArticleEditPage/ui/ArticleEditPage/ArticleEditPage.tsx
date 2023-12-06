import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
className?: string
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation('article-edit');
  const { id } = useParams<{id:string}>();
  const isEdit = Boolean(id);
  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? t(' Редактирование статьи с id:') + id : t('Создание новой статьи')}
    </Page>
  );
};

export default ArticleEditPage;
