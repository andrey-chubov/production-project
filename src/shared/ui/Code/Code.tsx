import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Code.module.scss';

import CopyIcon from '../../assets/icons/copy-20-20.svg';
import { Button, ButtonTheme } from '../Button/Button';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={cls.copyBtn}
        onClick={onCopy}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
