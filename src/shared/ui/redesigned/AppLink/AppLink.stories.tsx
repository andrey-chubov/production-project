import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AppLink } from './AppLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightPrimary = Template.bind({});
LightPrimary.args = {
  to: '/',
  children: 'Text',
  variant: 'primary',
};
export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
  to: '/',
  children: 'Text',
  variant: 'primary',
};
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];
export const Red = Template.bind({});
Red.args = {
  to: '/',
  children: 'Text',
  variant: 'red',
};
export const RedD = Template.bind({});
RedD.args = {
  to: '/',
  children: 'Text',
  variant: 'red',
};
RedD.decorators = [ThemeDecorator(Theme.DARK)];
