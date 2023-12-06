import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: {
    username: 'user',
    password: 'password',
  },
})];
export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
  loginForm: {
    username: 'user',
    password: 'password',
    error: 'error',
  },
})];
export const isLoading = Template.bind({});
isLoading.args = {};
isLoading.decorators = [StoreDecorator({
  loginForm: {
    isLoading: true,
  },
})];
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [StoreDecorator({
  loginForm: {
    username: 'user',
    password: 'password',
  },
}), ThemeDecorator(Theme.DARK)];
