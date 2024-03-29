import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Sidebar } from './Sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widgets/SideBar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
  ThemeDecorator(Theme.DARK),
];
export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
  StoreDecorator({
    user: {
      authData: undefined,
    },
  }),
];
