import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page/Page';

const MainPage = memo(() => {
  const { t } = useTranslation('mainpage');
  return (
    <Page>
      <BugButton />
      {t('Main page')}
    </Page>
  );
});

export default MainPage;
