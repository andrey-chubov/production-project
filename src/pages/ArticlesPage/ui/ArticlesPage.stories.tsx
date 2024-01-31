import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import ArticlesPage from './ArticlesPage';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/Article/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage {...args} />
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    articlesPage: {
      error: undefined,
      view: ArticleView.SMALL,
      _inited: false,
      sort: ArticleSortField.CREATED,
      search: '',
      order: 'asc',
      type: ArticleType.ALL,
      isLoading: false,
      ids: ['1'],
      page: 1,
      limit: 5,
      hasMore: false,
      entities: {
        1: {
          id: '1',
          title: 'test',
        },
      },
    },
  }),
];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
