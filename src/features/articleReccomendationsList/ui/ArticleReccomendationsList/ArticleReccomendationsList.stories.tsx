import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleReccomendationsList } from './ArticleReccomendationsList';

export default {
  title: 'features/ArticleReccomendationsList',
  component: ArticleReccomendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleReccomendationsList>;

const Template: ComponentStory<typeof ArticleReccomendationsList> = (args) => <ArticleReccomendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
