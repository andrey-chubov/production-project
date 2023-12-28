import { FeaturesFlags } from '@/shared/types/featuresFlags';

import { UserRole } from '../consts/consts';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeaturesFlags;
}

export interface UserShema {
  authData?: User;
  _inited: boolean;
}
