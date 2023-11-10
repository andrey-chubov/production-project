import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropDownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { VStack } from '../Stack';
import { AppLink } from '../AppLink/AppLink';

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
  const {
    className, items, trigger, direction = 'bottom right',
  } = props;

  const mapDirection : Record<DropDownDirection, string> = {
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
  };
  return (
    <Menu as='div' className={classNames(cls.DropDown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [mapDirection[direction]])}>
        <VStack gap='4'>
          {items.map((item) => {
            const content = ({ active }: {active: boolean}) => (
              <button
                type='button'
                disabled={item.disabled}
                onClick={item.onClick}
                className={classNames(cls.item, { [cls.active]: active })}
              >
                {item.content}
              </button>
            );

            if (item.href) {
              return (
                <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                  {content}
                </Menu.Item>
              );
            }

            return (
              <Menu.Item as={Fragment} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          })}

        </VStack>
      </Menu.Items>
    </Menu>
  );
};
