import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  label: 'Выберите значение',
  options: [
    {
      value: '123',
      content: 'Первый пункт',
    },
    {
      value: '1234',
      content: 'Второй  пункт',
    },
  ],
};
