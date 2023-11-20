import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { DropDownDirection } from 'shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popus.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string
  items?: ListBoxItem[]
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropDownDirection;
  label?: string;
}

export const ListBox = (props: ListBoxProps) => {
  const {
    className, items, value, defaultValue, onChange, readonly, direction = 'bottom left', label,
  } = props;

  return (
    <HStack gap='4'>
      {label && <span>{`${label} >`}</span>}
      <HListBox
        as='div'
        className={classNames('', {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button
          className={cls.trigger}
        >
          <Button disabled={readonly}>
            {value || defaultValue}
          </Button>

        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item?.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                  }, [className])}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>

  );
};
