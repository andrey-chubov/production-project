import { Theme } from 'app/providers/ThemeProider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {

  placeholder: 'Text',
  value: 'example',

};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {

  placeholder: 'Text',
  value: 'example',

};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];