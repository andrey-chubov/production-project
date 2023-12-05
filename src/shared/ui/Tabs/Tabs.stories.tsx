import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Tabs } from './Tabs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    { value: 'tab1', content: 'tab1' },
    { value: 'tab2', content: 'tab2' },
    { value: 'tab3', content: 'tab3' },
  ],
  value: 'tab2',
  onTabClick: action('onTabClick'),
};
Normal.decorators = [StoreDecorator({})];
