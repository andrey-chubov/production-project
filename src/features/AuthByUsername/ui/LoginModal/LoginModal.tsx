import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: ()=>void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { isOpen, className, onClose } = props;
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
      <LoginForm />
    </Modal>
  );
};
