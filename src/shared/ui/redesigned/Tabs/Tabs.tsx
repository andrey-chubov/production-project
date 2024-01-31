import { ReactNode, memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Tabs.module.scss';

import { Flex, FlexDirection } from '../../Stack/Flex/Flex';
import { Card } from '../Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}

export const Tabs = memo(
  ({ className, tabs, value, onTabClick, direction = 'row' }: TabsProps) => {
    const clickHandle = useCallback(
      (tab: TabItem) => () => onTabClick(tab),
      [onTabClick],
    );
    return (
      <Flex
        align="start"
        direction={direction}
        gap="8"
        className={classNames(cls.Tabs, {}, [className])}
      >
        {tabs.map((tab) => {
          const isSelected = tab.value === value;
          return (
            <Card
              className={classNames(
                cls.tab,
                { [cls.selected]: isSelected },
                [],
              )}
              key={tab.value}
              variant={isSelected ? 'light' : 'normal'}
              onClick={clickHandle(tab)}
              border="round"
            >
              {tab.content}
            </Card>
          );
        })}
      </Flex>
    );
  },
);
