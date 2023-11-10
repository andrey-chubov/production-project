import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: '150px' }}><Story /></div>,
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const items = [
  {
    content: 'first',
  },
  {
    content: 'second',
  },
  {
    content: 'third',
    disabled: true,
  },
];
export const topLeft = Template.bind({});
topLeft.args = {
  trigger: <Button>Open</Button>,
  items,
  direction: 'top left',
};
topLeft.decorators = [StoreDecorator({})];
export const topRight = Template.bind({});
topRight.args = {
  trigger: <Button>Open</Button>,
  items,
  direction: 'top right',
};
topRight.decorators = [StoreDecorator({})];
export const bottomLeft = Template.bind({});
bottomLeft.args = {
  trigger: <Button>Open</Button>,
  items,
  direction: 'bottom left',
};
bottomLeft.decorators = [StoreDecorator({})];
export const bottomRight = Template.bind({});
bottomRight.args = {
  trigger: <Button>Open</Button>,
  items,
  direction: 'bottom right',
};
bottomRight.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {
  trigger: <Button>Open</Button>,
  items,
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
