import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { TextTheme, Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';

import { ValidateProfileError } from '../../model/consts/consts';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors.ts/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileAction, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation('profile');
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileAction.updateProfile({ firstName: value || '' }));
    },
    [dispatch],
  );
  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileAction.updateProfile({ lastName: value || '' }));
    },
    [dispatch],
  );
  const onChangeAge = useCallback(
    (value?: string) => {
      const ageValue = Number(value || 0);
      dispatch(profileAction.updateProfile({ age: ageValue }));
    },
    [dispatch],
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileAction.updateProfile({ city: value || '' }));
    },
    [dispatch],
  );
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileAction.updateProfile({ username: value || '' }));
    },
    [dispatch],
  );
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileAction.updateProfile({ avatar: value || '' }));
    },
    [dispatch],
  );
  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileAction.updateProfile({ currency }));
    },
    [dispatch],
  );
  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileAction.updateProfile({ country }));
    },
    [dispatch],
  );

  const validateErrorsTranslates = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack gap="8" max className={classNames('', {}, [className])}>
        <EditableProfileCardHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              theme={TextTheme.ERROR}
              text={validateErrorsTranslates[err]}
              key={err}
              data-testid="EditableProfileCard.Error"
            />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          readonly={readonly}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
