import { Popover as HPopover } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popus.module.scss';
import { DropDownDirection } from '../../../../types/ui';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropDownDirection;
  children: ReactNode;
}

export const Popover = ({
  className, trigger, direction = 'bottom right', children,
}: PopoverProps) => (

  <HPopover className={classNames('', {}, [className, popupCls.popup])}>
    <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

    <HPopover.Panel className={classNames(cls.panel, {}, [mapDirectionClass[direction]])}>
      {children}
    </HPopover.Panel>
  </HPopover>
);
