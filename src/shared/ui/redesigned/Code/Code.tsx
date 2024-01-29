import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

import cls from './Code.module.scss';

import CopyIcon from '../../../assets/icons/copy-20-20.svg';
import CopyIconNew from '../../../assets/icons/copy.svg';
import { Button, ButtonTheme } from '../../deprecated/Button/Button';
import { Icon } from '../Icon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
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
      }
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon
            clickable
            onClick={onCopy}
            className={cls.copyBtn}
            Svg={CopyIconNew}
          />
          <code>{text}</code>
        </pre>
      }
    />
  );
});
