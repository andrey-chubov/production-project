import { CounterShema } from 'entities/Counter';
import { UserShema } from 'entities/User';

export interface StateSchema {
  counter: CounterShema
  user: UserShema
}
