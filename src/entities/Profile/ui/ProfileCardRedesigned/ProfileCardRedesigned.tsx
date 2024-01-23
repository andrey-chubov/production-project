import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardRedesignedSkeleton = () => (
  <Card padding="24" max>
    <VStack gap="32" max>
      <HStack justify="center" max>
        <Skeleton border="100%" width={128} height={128} />
      </HStack>
      <HStack gap="24" max>
        <VStack gap="16" max>
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
        </VStack>
        <VStack gap="16" max>
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
        </VStack>
      </HStack>
    </VStack>
  </Card>
);

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');
  return (
    <HStack justify="center" max>
      <Text
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Поробуйте обновить страницу')}
        variant="error"
        align="center"
      />
    </HStack>
  );
};

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const {
    className,
    data,
    onChangeFirstname,
    onChangeLastname,
    readonly,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const onKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <Card max padding="24" className={className} data-testid="ProfileCard">
      <VStack gap="32" max>
        {data?.avatar && (
          <HStack justify="center" max>
            <Avatar size={128} src={data?.avatar} alt="" />
          </HStack>
        )}
        <HStack gap="24" max>
          <VStack gap="16" max>
            <Input
              value={data?.firstName}
              label={t('Имя')}
              onChange={onChangeFirstname}
              readOnly={readonly}
              data-testid="ProfileCard.firstname"
            />
            <Input
              value={data?.lastName}
              label={t('Фамилия')}
              onChange={onChangeLastname}
              readOnly={readonly}
              data-testid="ProfileCard.lastname"
            />
            <Input
              value={data?.age}
              label={t('Возраст')}
              onChange={onChangeAge}
              readOnly={readonly}
              onKeyPress={onKeyPress}
            />
            <Input
              value={data?.city}
              label={t('Город')}
              onChange={onChangeCity}
              readOnly={readonly}
            />
          </VStack>
          <VStack gap="16" max>
            <Input
              value={data?.username}
              label={t('Имя')}
              onChange={onChangeUsername}
              readOnly={readonly}
            />
            <Input
              value={data?.avatar}
              label={t('Аватар')}
              onChange={onChangeAvatar}
              readOnly={readonly}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};
