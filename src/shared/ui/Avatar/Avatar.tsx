import { CSSProperties, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

import UserIcon from '../../assets/icons/user-filled.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  fallbackInverted?: boolean;
}

export const Avatar = ({
  className,
  src,
  alt,
  size = 100,
  fallbackInverted,
}: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const errorFallback = (
    <Icon
      Svg={UserIcon}
      width={size}
      height={size}
      inverted={fallbackInverted}
    />
  );
  const fallback = <Skeleton border="50%" width={size} height={size} />;
  return (
    <AppImage
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
};
