import type { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import ArticleRating from './ArticleRating';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const withEstimation = Template.bind({});
withEstimation.args = {
  articleId: '1',
};
withEstimation.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '2',
    },
  },
})];
withEstimation.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=2&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 2,
        },
      ],
    },
  ],
};
export const noEstimationDark = Template.bind({});
noEstimationDark.args = {};
noEstimationDark.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '2',
    },
  },
}), ThemeDecorator(Theme.DARK)];
noEstimationDark.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=2&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
        },
      ],
    },
  ],
};
