import { FeaturesFlags } from '@/shared/types/featuresFlags';

import { JsonSettings } from './jsonSettings';
import { UserRole } from '../consts/consts';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeaturesFlags;
  jsonSettings?: JsonSettings;
}

export interface UserShema {
  authData?: User;
  _inited: boolean;
}
