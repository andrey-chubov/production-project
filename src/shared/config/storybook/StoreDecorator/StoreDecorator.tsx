import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { articleDetailsCommentsReducer } from 'features/ArticleDetailsComment/model/slice/articleDetailsComentsSlice';
import { addCommentFormReducer } from 'entities/Comment/model/slice/addCommentFormSlice';
import { uiReducer } from 'features/UI';
import { articleDetailsRecommendationReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsRecomendationsSlice';
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice';

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
