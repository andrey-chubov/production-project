import { SVGProps, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}
interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}
interface ClickableIconProps extends IconBaseProps {
  clickable?: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
  const { className, Svg, width = 32, height = 32, ...otherProps } = props;

  const icon = (
    <Svg
      width={width}
      height={height}
      className={classNames(cls.Icon, {}, [className])}
      {...otherProps}
      onClick={undefined}
    />
  );
  if (props.clickable) {
    return (
      <button
        type="button"
        onClick={props.onClick}
        className={cls.button}
        style={{ height, width }}
      >
        {icon}
      </button>
    );
  }
  return icon;
});
