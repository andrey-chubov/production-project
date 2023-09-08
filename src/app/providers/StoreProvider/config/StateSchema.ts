import { CounterShema } from 'entities/Counter';
import { UserShema } from 'entities/User';
import { LoginShema } from 'features/AuthByUsername';

export interface StateSchema {
  counter: CounterShema;
  user: UserShema;
  loginForm?: LoginShema;
}
