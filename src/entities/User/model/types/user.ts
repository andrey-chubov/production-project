import { UserRole } from '../consts/consts';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface UserShema {
  authData?: User;
  _inited: boolean;
}
