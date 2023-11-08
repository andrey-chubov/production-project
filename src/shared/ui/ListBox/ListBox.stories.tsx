import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ListBox } from './ListBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const items = [
  { value: 'Durward Reynolds', content: 'Durward Reynolds' },
  { value: 'Kenton Towne', content: 'Kenton Towne' },
  { value: 'Therese Wunsch', content: 'Therese Wunsch', disabled: true },
  { value: 'Benedict Kessler', content: 'Benedict Kessler' },
  { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
];

export const Light = Template.bind({});
Light.args = {
  items,
  defaultValue: items[0].value,
  value: items[0].value,
};
Light.decorators = [StoreDecorator({})];
export const DirectionTop = Template.bind({});
DirectionTop.args = {
  items,
  defaultValue: items[0].value,
  value: items[0].value,
  direction: 'top',
};
DirectionTop.decorators = [StoreDecorator({})];
export const Disabled = Template.bind({});
Disabled.args = {
  items,
  defaultValue: items[0].value,
  value: items[0].value,
  direction: 'top',
  readonly: true,
};
Disabled.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {
  items,
  defaultValue: items[0].value,
  value: items[0].value,
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
