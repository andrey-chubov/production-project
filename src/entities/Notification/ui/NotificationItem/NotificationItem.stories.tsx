import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notification';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
  href: '#',
} as Notification;
export const Light = Template.bind({});
Light.args = {
  item: notification,
};
Light.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {
  item: notification,
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
