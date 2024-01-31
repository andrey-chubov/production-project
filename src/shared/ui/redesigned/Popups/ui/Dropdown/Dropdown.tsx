import { Fragment, ReactNode } from 'react';

import { Menu } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';

import cls from './Dropdown.module.scss';

import { VStack } from '../../../../Stack';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popus.module.scss';

export interface DropDownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropDownItem[];
  trigger: ReactNode;
  direction?: DropDownDirection;
}

export const Dropdown = (props: DropdownProps) => {
  const { className, items, trigger, direction = 'bottom right' } = props;

  return (
    <Menu
      as="div"
      className={classNames(cls.DropDown, {}, [className, popupCls.popup])}
    >
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items
        className={classNames(cls.menu, {}, [
          mapDirectionClass[direction],
          popupCls.menu,
        ])}
      >
        <VStack gap="4">
          {items.map((item) => {
            const content = ({ active }: { active: boolean }) => (
              <button
                key={String(item.content)}
                type="button"
                disabled={item.disabled}
                onClick={item.onClick}
                className={classNames(cls.item, { [popupCls.active]: active })}
              >
                {item.content}
              </button>
            );

            if (item.href) {
              return (
                <Menu.Item
                  as={AppLink}
                  to={item.href}
                  disabled={item.disabled}
                  key={item.href}
                >
                  {content}
                </Menu.Item>
              );
            }

            return (
              <Menu.Item
                as={Fragment}
                disabled={item.disabled}
                key={String(item.content)}
              >
                {content}
              </Menu.Item>
            );
          })}
        </VStack>
      </Menu.Items>
    </Menu>
  );
};
