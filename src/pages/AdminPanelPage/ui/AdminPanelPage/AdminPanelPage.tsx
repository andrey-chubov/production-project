import { classNames } from '@/shared/lib/classNames/classNames';

interface AdminPanelPageProps {
className?: string
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => (
  // eslint-disable-next-line i18next/no-literal-string
  <div className={classNames('', {}, [className])}>
    Админ панель
  </div>
);

export default AdminPanelPage;
