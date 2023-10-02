export interface User {
  id: number;
  username: string;
}

export interface UserShema {
  authData?: User;
  _inited:boolean;
}
