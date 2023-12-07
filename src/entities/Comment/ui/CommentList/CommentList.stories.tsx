import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { CommentList } from './CommentList';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const comments = [
  {
    id: '1',
    text: 'some comment',
    articleId: '1',
    user: {
      id: '1',
      username: 'admin',
      password: '123',
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
  },
  {
    id: '2',
    text: 'some comment 2',
    articleId: '1',
    user: {
      id: '1',
      username: 'admin',
      password: '123',
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
  },
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light = Template.bind({});
Light.args = {
  comments,
};
Light.decorators = [StoreDecorator({})];
export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  comments: [],

};
Loading.decorators = [StoreDecorator({})];
export const noComments = Template.bind({});
noComments.args = {
  comments: [],
};
noComments.decorators = [StoreDecorator({})];
