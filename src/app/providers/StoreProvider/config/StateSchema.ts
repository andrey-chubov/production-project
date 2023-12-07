import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ArticleDetailsShema } from '@/entities/Article';
import { AddCommentFormSchema } from '@/entities/Comment';
import { CounterShema } from '@/entities/Counter';
import { UserShema } from '@/entities/User';
import { ArticleDetailsCommentsSchema } from '@/features/ArticleDetailsComment';
import { LoginShema } from '@/features/AuthByUsername';
import { ProfileShema } from '@/features/editableProfileCard';
import { UISchema } from '@/features/UI';
import { ArticleDetailsRecommendationsSchema } from '@/pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  counter: CounterShema;
  user: UserShema;
  ui: UISchema;
 [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  loginForm?: LoginShema;
  profile?: ProfileShema;
  articleDetails?: ArticleDetailsShema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedRedusers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true -монтирован
  getMountedReduces: ()=>MountedRedusers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
