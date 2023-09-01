import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])} />
);
