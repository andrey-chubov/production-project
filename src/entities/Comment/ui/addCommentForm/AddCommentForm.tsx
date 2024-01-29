import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { TextAlign, TextTheme, Text } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
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
        <HStack
          justify="center"
          max
          className={classNames(cls.AddCommentForm, {}, [className])}
        >
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
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <HStack
            justify="between"
            max
            className={classNames(cls.AddCommentForm, {}, [className])}
            data-testid="AddCommentForm"
          >
            <InputDeprecated
              placeholder={t('Введите комментарий')}
              value={value}
              onChange={onCommentTextChange}
              className={cls.input}
              data-testid="AddCommentForm.Input"
            />
            <ButtonDeprecated
              onClick={onSendHandler}
              data-testid="AddCommentForm.Button"
            >
              {t('Отправить')}
            </ButtonDeprecated>
          </HStack>
        }
        on={
          <Card padding="24" border="round" max>
            <HStack
              justify="between"
              max
              gap="16"
              className={classNames(cls.AddCommentFormRedesigned, {}, [
                className,
              ])}
              data-testid="AddCommentForm"
            >
              <Input
                placeholder={t('Введите комментарий')}
                value={value}
                onChange={onCommentTextChange}
                className={cls.input}
                data-testid="AddCommentForm.Input"
              />
              <Button
                onClick={onSendHandler}
                data-testid="AddCommentForm.Button"
              >
                {t('Отправить')}
              </Button>
            </HStack>
          </Card>
        }
      />
    );
  },
);
