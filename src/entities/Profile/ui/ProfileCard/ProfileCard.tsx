import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
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
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
        ;
      </div>

    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Поробуйте обновить страницу')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt='' />
          </div>
        )}
        <Input
          value={data?.firstName}
          placeholder={t('Ваше имя')}
          className={cls.input}
          onChange={onChangeFirstname}
          readOnly={readonly}
        />
        <Input
          value={data?.lastName}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
          onChange={onChangeLastname}
          readOnly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={cls.input}
          onChange={onChangeAge}
          readOnly={readonly}
          onKeyPress={onKeyPress}
        />
        <Input
          value={data?.city}
          placeholder={t('Ваш город')}
          className={cls.input}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('Имя пользователя')}
          className={cls.input}
          onChange={onChangeUsername}
          readOnly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Аватар')}
          className={cls.input}
          onChange={onChangeAvatar}
          readOnly={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          className={cls.input}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          value={data?.country}
          className={cls.input}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
