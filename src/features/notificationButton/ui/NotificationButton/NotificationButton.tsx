import { memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import NotificationsIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Popover } from '@/shared/ui/deprecated/Popups';

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
      <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
        <Icon Svg={NotificationsIcon} inverted />
      </Button>
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
      <div>
        <Popover className={classNames('', {}, [className])} trigger={trigger}>
          <NotificationList className={cls.notifications} />
        </Popover>
      </div>
    );
  },
);
