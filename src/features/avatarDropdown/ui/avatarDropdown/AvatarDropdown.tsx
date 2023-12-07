import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { RoutePath } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar';
import {
  getUserAuthData, isUserAdmin, isUserManager, userAction,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface AvatarDropdownProps {
className?: string
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const [t] = useTranslation();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const onLogout = useCallback(() => {
    dispatch(userAction.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      // className={cls.dropdown}
      direction='bottom right'
      items={[
        ...(isAdminPanelAvailable
          ? [{
            content: t('Админка'),
            href: RoutePath.admin_panel,
          }]
          : []),
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData.id,
        },
        {
          content: t('Выйти'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});
