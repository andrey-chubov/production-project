import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { articleDetailsCommentsReducer } from '@/features/ArticleDetailsComment/testing';
import { addCommentFormReducer } from '@/entities/Comment/testing';
import { uiReducer } from '@/features/UI';
import { articleDetailsRecommendationReducer } from '@/pages/ArticleDetailsPage/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  ui: uiReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsRecommendations: articleDetailsRecommendationReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
