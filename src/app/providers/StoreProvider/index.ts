import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import {
  StateSchema, ThunkConfig, StateSchemaKey, ReduxStoreWithManager,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
};
export type {
  StateSchema,
  AppDispatch,
  ThunkConfig,
  StateSchemaKey,
  ReduxStoreWithManager,
};
