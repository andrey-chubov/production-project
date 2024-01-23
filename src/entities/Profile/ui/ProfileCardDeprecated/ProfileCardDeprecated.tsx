import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text, TextTheme, TextAlign } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './ProfileCardDeprecated.module.scss';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardDeprecatedLoader = () => (
  <HStack
    justify="center"
    max
    className={classNames(cls.ProfileCard, {}, [cls.loading])}
  >
    <Loader />;
  </HStack>
);
export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, {}, [cls.error])}
    >
      <Text
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Поробуйте обновить страницу')}
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
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

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      max
      gap="8"
      className={classNames(cls.ProfileCard, mods, [className])}
      data-testid="ProfileCard"
    >
      {data?.avatar && (
        <HStack justify="center" max>
          <Avatar src={data?.avatar} alt="" />
        </HStack>
      )}
      <Input
        value={data?.firstName}
        placeholder={t('Ваше имя')}
        onChange={onChangeFirstname}
        readOnly={readonly}
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastName}
        placeholder={t('Ваша фамилия')}
        onChange={onChangeLastname}
        readOnly={readonly}
        data-testid="ProfileCard.lastname"
      />
      <Input
        value={data?.age}
        placeholder={t('Ваш возраст')}
        onChange={onChangeAge}
        readOnly={readonly}
        onKeyPress={onKeyPress}
      />
      <Input
        value={data?.city}
        placeholder={t('Ваш город')}
        onChange={onChangeCity}
        readOnly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Имя пользователя')}
        onChange={onChangeUsername}
        readOnly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Аватар')}
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
  );
};
