import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterShema } from 'entities/Counter';
import { ProfileShema } from 'entities/Profile';
import { UserShema } from 'entities/User';
import { LoginShema } from 'features/AuthByUsername';

export interface StateSchema {
  counter: CounterShema;
  user: UserShema;
  loginForm?: LoginShema;
  profile?: ProfileShema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
