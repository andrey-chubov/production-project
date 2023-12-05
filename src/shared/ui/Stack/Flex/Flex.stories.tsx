import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Flex } from './Flex';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>row</div>
      <div>row</div>
      <div>row</div>
    </>
  ),
};
Row.decorators = [StoreDecorator({})];
export const Row4 = Template.bind({});
Row4.args = {
  gap: '4',
  children: (
    <>
      <div>row</div>
      <div>row</div>
      <div>row</div>
    </>
  ),
};
Row4.decorators = [StoreDecorator({})];
export const Row8 = Template.bind({});
Row8.args = {
  gap: '8',
  children: (
    <>
      <div>row</div>
      <div>row</div>
      <div>row</div>
    </>
  ),
};
Row8.decorators = [StoreDecorator({})];
export const Row16 = Template.bind({});
Row16.args = {
  gap: '16',
  children: (
    <>
      <div>row</div>
      <div>row</div>
      <div>row</div>
    </>
  ),
};
Row16.decorators = [StoreDecorator({})];
export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>column</div>
      <div>column</div>
      <div>column</div>
    </>
  ),
};
Column.decorators = [StoreDecorator({})];
export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
  direction: 'column',
  align: 'end',
  children: (
    <>
      <div>column</div>
      <div>column</div>
      <div>column</div>
    </>
  ),
};
ColumnAlignEnd.decorators = [StoreDecorator({})];
export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  direction: 'column',
  gap: '16',
  children: (
    <>
      <div>column</div>
      <div>column</div>
      <div>column</div>
    </>
  ),
};
ColumnGap16.decorators = [StoreDecorator({})];
