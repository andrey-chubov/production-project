import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleViewSelectors } from './ArticleViewSelectors';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/ArticleViewSelectors',
  component: ArticleViewSelectors,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewSelectors>;

const Template: ComponentStory<typeof ArticleViewSelectors> = (args) => (
  <ArticleViewSelectors {...args} />
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
