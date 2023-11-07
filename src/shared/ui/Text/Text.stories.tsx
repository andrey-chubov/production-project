import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextSize, TextTheme } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  title: 'Заголовок',
  text: 'Текст',
};
export const Error = Template.bind({});
Error.args = {
  title: 'Заголовок',
  text: 'Текст',
  theme: TextTheme.ERROR,
};
export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Заголовок',
  text: 'Текст',
  theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Заголовок',
};
export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Текстт',
};
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Заголовок',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Текстт',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Заголовок',
  text: 'Текст',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Заголовок',
  text: 'Текст',
  size: TextSize.L,
};
export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Заголовок',
  text: 'Текст',
  size: TextSize.S,
};
export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Заголовок',
  text: 'Текст',
  size: TextSize.M,
};
