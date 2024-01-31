import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Popover } from './Popover';
import { Button } from '../../../Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light = Template.bind({});
Light.args = {
  trigger: <Button>Popover</Button>,
  children: 'tertre',
};
Light.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {
  trigger: <Button>Popover</Button>,
  children: 'tertre',
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
