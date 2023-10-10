import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentCard } from './CommentCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const comment = {
  id: '1',
  text: 'some comment',
  articleId: '1',
  user: {
    id: 1,
    username: 'admin',
    password: '123',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light = Template.bind({});
Light.args = {
  comment,
};
Light.decorators = [StoreDecorator({})];
export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Loading.decorators = [StoreDecorator({})];
