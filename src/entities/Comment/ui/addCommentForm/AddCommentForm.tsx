import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { TextAlign, TextTheme, Text } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  value: string;
  error?: string;
  onSendHandler: () => void;
  onCommentTextChange: (text: string) => void;
}

export const AddCommentForm = memo(
  ({
    className,
    value,
    onSendHandler,
    onCommentTextChange,
    error,
  }: AddCommentFormProps) => {
    const { t } = useTranslation('comment');

    if (error) {
      return (
        <HStack justify='center' max className={classNames(cls.AddCommentForm, {}, [className])}>
          <Text
            title={t('Произошла ошибка формы')}
            text={t('Поробуйте обновить страницу')}
            theme={TextTheme.ERROR}
            align={TextAlign.CENTER}
          />
        </HStack>
      );
    }

    return (
      <HStack justify='between' max className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите комментарий')}
          value={value}
          onChange={onCommentTextChange}
          className={cls.input}
        />
        <Button onClick={onSendHandler}>{t('Отправить')}</Button>
      </HStack>
    );
  },
);
