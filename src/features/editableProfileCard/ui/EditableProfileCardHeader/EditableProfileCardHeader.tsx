import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/Stack';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileAction } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = ({
  className,
}: EditableProfileCardHeaderProps) => {
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
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <HStack
          max
          justify="between"
          className={classNames('', {}, [className])}
        >
          <TextDeprecated title={t('Профиль пользователя')} />
          {canEdit && (
            <div>
              {readonly ? (
                <ButtonDeprecated
                  theme={ButtonTheme.OUTLINE}
                  onClick={onEdit}
                  data-testid="EditableProfileCardHeader.EditButton"
                >
                  {t('Редактировать')}
                </ButtonDeprecated>
              ) : (
                <HStack gap="8">
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCansel}
                    data-testid="EditableProfileCardHeader.CancelButton"
                  >
                    {t('Отменить')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                    data-testid="EditableProfileCardHeader.SaveButton"
                  >
                    {t('Сохранить')}
                  </ButtonDeprecated>
                </HStack>
              )}
            </div>
          )}
        </HStack>
      }
      on={
        <Card border="partial" padding="24" max>
          <HStack
            max
            justify="between"
            className={classNames('', {}, [className])}
          >
            <Text title={t('Профиль пользователя')} />
            {canEdit && (
              <div>
                {readonly ? (
                  <Button
                    variant="outline"
                    onClick={onEdit}
                    data-testid="EditableProfileCardHeader.EditButton"
                  >
                    {t('Редактировать')}
                  </Button>
                ) : (
                  <HStack gap="8">
                    <Button
                      color="error"
                      variant="outline"
                      onClick={onCansel}
                      data-testid="EditableProfileCardHeader.CancelButton"
                    >
                      {t('Отменить')}
                    </Button>
                    <Button
                      variant="outline"
                      color="success"
                      onClick={onSave}
                      data-testid="EditableProfileCardHeader.SaveButton"
                    >
                      {t('Сохранить')}
                    </Button>
                  </HStack>
                )}
              </div>
            )}
          </HStack>
        </Card>
      }
    />
  );
};
