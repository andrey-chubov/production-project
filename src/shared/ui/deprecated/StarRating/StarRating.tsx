import { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './StarRating.module.scss';

import StarIcon from '../../../assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
  className?: string;
  size?: number;
  onSelect?: (starCount: number) => void;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const StarRating = memo(
  ({ className, size = 30, onSelect, selectedStars = 0 }: StarRatingProps) => {
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
      if (!isSelected) {
        setCurrentStarsCount(starsCount);
      }
    };
    const onLeave = () => {
      if (!isSelected) {
        setCurrentStarsCount(0);
      }
    };

    const onClick = (starsCount: number) => () => {
      if (!isSelected) {
        onSelect?.(starsCount);
        setCurrentStarsCount(starsCount);
        setIsSelected(true);
      }
    };
    return (
      <div className={classNames('', {}, [className])}>
        {stars.map((starNumber) => (
          <Icon
            Svg={StarIcon}
            key={starNumber}
            className={classNames(
              cls.starIcon,
              {
                [cls.hovered]: currentStarsCount >= starNumber,
                [cls.normal]: currentStarsCount < starNumber,
                [cls.selected]: isSelected,
              },
              [],
            )}
            width={size}
            height={size}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(starNumber)}
            onClick={onClick(starNumber)}
            data-testid={`StarRating${starNumber}`}
            data-selected={currentStarsCount >= starNumber}
          />
        ))}
      </div>
    );
  },
);
