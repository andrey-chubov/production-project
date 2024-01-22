import { Fragment, ReactNode, useMemo } from 'react';

import { Listbox as HListBox } from '@headlessui/react';

import CheckIcon from '@/shared/assets/icons/check.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';

import cls from './ListBox.module.scss';

import { HStack } from '../../../../Stack';
import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icon';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popus.module.scss';

export interface ListBoxItem<T extends string> {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  className?: string;
  items?: ListBoxItem<T>[];
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: DropDownDirection;
  label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom left',
    label,
  } = props;

  const selectedItem = useMemo(
    () => items?.find((item) => item.value === value),
    [items, value],
  );

  return (
    <HStack gap="4">
      {label && <span>{`${label} >`}</span>}
      <HListBox
        as="div"
        className={classNames('', {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={cls.trigger}>
          <Button variant="filled" disabled={readonly}>
            {selectedItem?.content ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, [
            mapDirectionClass[direction],
            popupCls.menu,
          ])}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item?.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [popupCls.active]: active,
                      [popupCls.disabled]: item.disabled,
                      [popupCls.selected]: selected,
                    },
                    [className],
                  )}
                >
                  {' '}
                  <HStack gap="8">
                    {selected && <Icon Svg={CheckIcon} />}
                    {item.content}
                  </HStack>
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
