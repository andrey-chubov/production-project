import { ReactNode } from 'react';

import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';

import cls from './Popover.module.scss';

import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popus.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropDownDirection;
  children: ReactNode;
}

export const Popover = ({
  className,
  trigger,
  direction = 'bottom right',
  children,
}: PopoverProps) => (
  <HPopover className={classNames('', {}, [className, popupCls.popup])}>
    <HPopover.Button as="div" className={popupCls.trigger}>
      {trigger}
    </HPopover.Button>

    <HPopover.Panel
      className={classNames(cls.panel, {}, [
        mapDirectionClass[direction],
        popupCls.menu,
      ])}
    >
      {children}
    </HPopover.Panel>
  </HPopover>
);
