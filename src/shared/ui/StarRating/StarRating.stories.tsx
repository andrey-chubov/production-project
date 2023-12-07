import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { StarRating } from './StarRating';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SelectedStars = Template.bind({});
SelectedStars.args = {
  size: 30,
  selectedStars: 4,
};
SelectedStars.decorators = [StoreDecorator({})];
export const NoStars = Template.bind({});
NoStars.args = {};
NoStars.decorators = [StoreDecorator({})];
