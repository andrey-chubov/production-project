import { memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/Stack';

import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavBarProps) => {
  const [t] = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.NavbarRedesigned,
    off: () => cls.Navbar,
  });

  if (authData) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <header className={classNames(mainClass, {}, [className])}>
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(mainClass, {}, [className])}>
            <TextDeprecated
              className={cls.appName}
              title={t('Новостной портал')}
              theme={TextTheme.INVERTED}
            />
            <AppLinkDeprecated
              to={getRouteArticleCreate()}
              theme={AppLinkTheme.SECONDARY}
              className={cls.createBtn}
            >
              {t('Создать статью')}
            </AppLinkDeprecated>
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <header className={classNames(mainClass, {}, [className])}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button className={cls.links} variant="clear" onClick={onOpenModal}>
            {t('Войти')}
          </Button>
        }
        off={
          <ButtonDeprecated
            className={cls.links}
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={onOpenModal}
          >
            {t('Войти')}
          </ButtonDeprecated>
        }
      />

      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
