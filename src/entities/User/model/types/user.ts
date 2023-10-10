export interface User {
  id: number;
  username: string;
  avatar?: string;
}

export interface UserShema {
  authData?: User;
  _inited:boolean;
}
