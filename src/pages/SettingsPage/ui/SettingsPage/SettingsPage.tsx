import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={className}>
      <VStack gap="16">
        <Text title={t('Настройки пользователя')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;
