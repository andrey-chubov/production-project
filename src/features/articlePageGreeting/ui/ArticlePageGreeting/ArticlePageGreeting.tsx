import { memo, useCallback, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';

export const ArticlePageGreeting = memo(() => {
  const isMobile = useDeviceDetect();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { isArticlesPageHasOpened } = useJsonSettings();

  const { t } = useTranslation();

  useEffect(() => {
    if (!isArticlesPageHasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageHasOpened: true }));
    }
  }, [dispatch, isArticlesPageHasOpened]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const text = t('Здесь вы можете искать и просматривать статьи');

  if (isMobile) {
    return (
      <div>
        <Drawer isOpen={isOpen} onClose={onClose}>
          {text}
        </Drawer>
      </div>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Text title={t('Добро пожаловать на страницу статей')} text={text} />
    </Modal>
  );
});
