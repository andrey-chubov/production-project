import { memo } from 'react';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/burger.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TilesIcon from '@/shared/assets/icons/tile.svg';
import TilesIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/Stack';

import cls from './ArticleViewSelectors.module.scss';

interface ArticleViewSelectorsProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      off: () => TilesIconDeprecated,
      on: () => TilesIcon,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      off: () => ListIconDeprecated,
      on: () => ListIcon,
    }),
  },
];

export const ArticleViewSelectors = memo(
  ({ className, view, onViewClick }: ArticleViewSelectorsProps) => {
    const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView);
    };
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card
            border="round"
            className={classNames(cls.ArticleViewRedesigned, {}, [className])}
          >
            <HStack gap="8">
              {viewTypes.map((viewType) => (
                <Icon
                  clickable
                  onClick={onClick(viewType.view)}
                  Svg={viewType.icon}
                  className={classNames('', {
                    [cls.notSelected]: viewType.view !== view,
                  })}
                />
              ))}
            </HStack>
          </Card>
        }
        off={
          <div className={classNames(cls.ArticleView, {}, [className])}>
            {viewTypes.map((viewType) => (
              <ButtonDeprecated
                theme={ButtonTheme.CLEAR}
                onClick={onClick(viewType.view)}
                key={viewType.view}
              >
                <IconDeprecated
                  Svg={viewType.icon}
                  width={24}
                  height={24}
                  className={classNames('', {
                    [cls.notSelected]: viewType.view !== view,
                  })}
                />
              </ButtonDeprecated>
            ))}
          </div>
        }
      />
    );
  },
);
