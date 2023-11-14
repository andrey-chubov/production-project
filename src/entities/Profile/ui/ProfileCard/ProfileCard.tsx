import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
 className?: string;
 data?: Profile;
 isLoading?: boolean;
 error?: string;
 readonly?:boolean;
 onChangeFirstname?: (value?: string)=>void;
 onChangeLastname?: (value?: string)=>void;
 onChangeAge?: (value?: string)=>void;
 onChangeCity?: (value?: string)=>void;
 onChangeUsername?: (value?: string)=>void;
 onChangeAvatar?: (value?: string)=>void;
 onChangeCurrency?: (currency: Currency)=>void;
 onChangeCountry?: (country: Country)=>void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const {
    className,
    data,
    isLoading,
    error,
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

  if (isLoading) {
    return (
      <HStack justify='center' max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
        ;
      </HStack>

    );
  }

  if (error) {
    return (
      <HStack justify='center' max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Поробуйте обновить страницу')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack max gap='8' className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack justify='center' max>
          <Avatar src={data?.avatar} alt='' />
        </HStack>
      )}
      <Input
        value={data?.firstName}
        placeholder={t('Ваше имя')}
        onChange={onChangeFirstname}
        readOnly={readonly}
        data-testid='ProfileCard.firstname'
      />
      <Input
        value={data?.lastName}
        placeholder={t('Ваша фамилия')}
        onChange={onChangeLastname}
        readOnly={readonly}
        data-testid='ProfileCard.lastname'
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
