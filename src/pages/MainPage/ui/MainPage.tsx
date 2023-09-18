import { BugButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
  const { t } = useTranslation('mainpage');
  return (
    <div>
      <BugButton />
      {t('Main page')}
    </div>
  );
});

export default MainPage;
