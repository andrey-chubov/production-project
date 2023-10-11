import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleDetailsComment from './ArticleDetailsComment';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/ArticleDetailsComment',
  component: ArticleDetailsComment,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsComment>;

const Template: ComponentStory<typeof ArticleDetailsComment> = (args) => <ArticleDetailsComment {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  articleDetailsComments: {
    isLoading: false,
    ids: ['1'],
    error: undefined,
    entities: {
      1: {
        id: '1',
        text: 'some comment',
        articleId: '1',
        userId: '1',
        user: {
          id: '1',
          username: 'admin',
          // @ts-ignore
          password: '123',
          avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },

      },
    },
  },
})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
  articleDetailsComments: {
    isLoading: false,
    ids: ['1'],
    error: undefined,
    entities: {
      1: {
        id: '1',
        text: 'some comment',
        articleId: '1',
        userId: '1',
        user: {
          id: '1',
          username: 'admin',
          // @ts-ignore
          password: '123',
          avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
      },
    },
  },
}), ThemeDecorator(Theme.DARK)];
export const noComments = Template.bind({});
noComments.args = {};
noComments.decorators = [StoreDecorator({
  addCommentForm: {
    text: 'Ваш комментарий',
  },
})];
