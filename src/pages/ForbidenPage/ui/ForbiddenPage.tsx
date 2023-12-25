import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const ForbiddenPage = memo(() => {
  const { t } = useTranslation('forbidden');
  return <Page data-testid="ForbiddenPage">{t('Forbidden page')}</Page>;
});

export default ForbiddenPage;
