import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { AddCommentForm } from './AddCommentForm';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'entities/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args} />
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal = Template.bind({});
Normal.args = {
  value: 'text',
  onSendHandler() {},
  onCommentTextChange(text) {
    'text';
  },
};
Normal.decorators = [StoreDecorator({})];
