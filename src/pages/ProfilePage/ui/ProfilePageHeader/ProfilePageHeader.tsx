import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileAction,
  updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const readonly = useSelector(getProfileReadonly);

  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileAction.setReadonly(false));
  }, [dispatch]);

  const onCansel = useCallback(() => {
    dispatch(profileAction.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль пользователя')} />
      {canEdit && (
        <div className={cls.btnWrapper}>
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              className={cls.editBtn}
              onClick={onEdit}
            >
              {t('Редактировать')}
            </Button>
          ) : (
            <>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                className={cls.editBtn}
                onClick={onCansel}
              >
                {t('Отменить')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.saveBtn}
                onClick={onSave}
              >
                {t('Сохранить')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
