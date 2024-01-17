import { memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import NotificationsIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(
  ({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useDeviceDetect();

    const onCloseDrawer = useCallback(() => {
      setIsOpen(false);
    }, []);

    const onOpenDrawer = useCallback(() => {
      setIsOpen(true);
    }, []);
    const trigger = (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <IconDeprecated Svg={NotificationsIconDeprecated} inverted />
          </ButtonDeprecated>
        }
        on={<Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />}
      />
    );

    if (isMobile) {
      return (
        <div>
          {trigger}
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </div>
      );
    }
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <div>
            <PopoverDeprecated
              className={classNames('', {}, [className])}
              trigger={trigger}
            >
              <NotificationList className={cls.notifications} />
            </PopoverDeprecated>
          </div>
        }
        on={
          <div>
            <Popover
              className={classNames('', {}, [className])}
              trigger={trigger}
            >
              <NotificationList className={cls.notifications} />
            </Popover>
          </div>
        }
      />
    );
  },
);
