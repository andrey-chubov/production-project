import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropDownDirection = 'top' | 'bottom';

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
    className, items, value, defaultValue, onChange, readonly, direction = 'bottom', label,
  } = props;

  const mapDirection : Record<DropDownDirection, string> = {
    top: cls.optionsTop,
    bottom: cls.optionsBottom,
  };

  return (
    <HStack gap='4'>
      {label && <span>{`${label} >`}</span>}
      <HListBox
        as='div'
        className={classNames(cls.ListBox, {}, [className])}
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
        <HListBox.Options className={classNames(cls.options, {}, [mapDirection[direction]])}>
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
                    [cls.active]: active,
                    [cls.disabled]: item.disabled,
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
