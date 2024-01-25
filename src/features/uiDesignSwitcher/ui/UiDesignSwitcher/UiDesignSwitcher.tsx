import { memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { getFeaturesFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/Stack';

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isAppRedesigned = getFeaturesFlag('isAppRedesigned');
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const [isLoading, setIsLoading] = useState(false);

  const items = [
    {
      content: t('Новый дизайн'),
      value: 'new',
    },
    {
      content: t('Старый дизайн'),
      value: 'old',
    },
  ];

  const onChange = useCallback(
    (value: string) => {
      if (authData) {
        setIsLoading(true);
        dispatch(
          updateFeatureFlag({
            userId: authData?.id,
            newFeatures: {
              isAppRedesigned: value === 'new',
            },
          }),
        ).unwrap();
        setIsLoading(false);
      }
    },
    [authData, dispatch],
  );

  return (
    <HStack>
      <Text text={t('Вариант интерфейса')} />
      {isLoading ? (
        <Skeleton width={100} height={40} />
      ) : (
        <ListBox
          value={isAppRedesigned ? 'new' : 'old'}
          items={items}
          onChange={onChange}
          className={className}
        />
      )}
    </HStack>
  );
});
