import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TilesIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/const/const';
import cls from './ArticleViewSelectors.module.scss';

interface ArticleViewSelectorsProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TilesIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelectors = memo(
  ({ className, view, onViewClick }: ArticleViewSelectorsProps) => {
    const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView);
    };
    return (
      <div className={classNames('', {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)} key={viewType.view}>
            <Icon
              Svg={viewType.icon}
              className={classNames('', {
                [cls.notSelected]: viewType.view !== view,
              })}
            />
          </Button>
        ))}
      </div>
    );
  },
);
