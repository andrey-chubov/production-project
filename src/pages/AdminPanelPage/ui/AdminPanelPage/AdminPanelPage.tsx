import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
className?: string
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => (
  // eslint-disable-next-line i18next/no-literal-string
  <Page className={classNames('', {}, [className])} data-testid='AdminPanelPage'>
    Админ панель
  </Page>
);

export default AdminPanelPage;
