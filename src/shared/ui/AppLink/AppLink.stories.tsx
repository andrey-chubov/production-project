import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AppLink, AppLinkTheme } from './AppLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightPrimary = Template.bind({});
LightPrimary.args = {
  to: '/',
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};
export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
  to: '/',
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];
export const LightSecondary = Template.bind({});
LightSecondary.args = {
  to: '/',
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};
export const DarkSecondary = Template.bind({});
DarkSecondary.args = {
  to: '/',
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
};
DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)];
