import { memo, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { VStack } from '@/shared/ui/Stack';

import cls from './Sidebar.module.scss';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItemList = useSelector(getSidebarItems);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(
    () =>
      sidebarItemList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, sidebarItemList],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <aside
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
          data-testid="sidebar"
        >
          <Button
            type="button"
            onClick={onToggle}
            className={cls.collapseButton}
            data-testid="toggleBtn"
            theme={ButtonTheme.BACKGROUND_INVERTED}
            square
            size={ButtonSize.L}
          >
            {collapsed ? '>' : '<'}
          </Button>
          <VStack role="navigation" gap="8" className={cls.items}>
            {itemList}
          </VStack>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
        </aside>
      }
      on={
        <aside
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [className],
          )}
          data-testid="sidebar"
        >
          <AppLogo className={cls.appLogo} />
          <VStack role="navigation" gap="8" className={cls.items}>
            {itemList}
          </VStack>
          <Icon
            Svg={ArrowIcon}
            clickable
            onClick={onToggle}
            className={cls.collapsedBtn}
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
        </aside>
      }
    />
  );
});
