import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ListBox } from './ListBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '150px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

const items = [
  { value: 'Durward Reynolds', content: 'Durward Reynolds' },
  { value: 'Kenton Towne', content: 'Kenton Towne' },
  { value: 'Therese Wunsch', content: 'Therese Wunsch', disabled: true },
  { value: 'Benedict Kessler', content: 'Benedict Kessler' },
  { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
];

export const topLeft = Template.bind({});
topLeft.args = {
  items,
  defaultValue: items[0].value,
  value: items[0].value,
  direction: 'top left',
};
topLeft.decorators = [StoreDecorator({})];
export const topRight = Template.bind({});
topRight.args = {
  items,
  defaultValue: items[0].value,
  value: items[0].value,
  direction: 'top right',
};
topRight.decorators = [StoreDecorator({})];
export const Disabled = Template.bind({});
export const bottomLeft = Template.bind({});
bottomLeft.args = {
  items,
  defaultValue: items[0].value,
  value: items[0].value,
  direction: 'bottom left',
};
bottomLeft.decorators = [StoreDecorator({})];
Disabled.args = {
  items,
  defaultValue: items[0].value,
  value: items[0].value,
  direction: 'top right',
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
