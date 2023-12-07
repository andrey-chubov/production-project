import cls from './popus.module.scss';

import { DropDownDirection } from '../../../types/ui';

export const mapDirectionClass: Record<DropDownDirection, string> = {
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
};
