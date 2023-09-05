import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
  const [t] = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
        {t('Войти')}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus,')}
      </Modal>

    </div>
  );
};
