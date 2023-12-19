import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import ProfileRating from './ProfileRating';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/ProfileRating',
  component: ProfileRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const withEstimation = Template.bind({});
withEstimation.args = {
  profileId: '1',
};
withEstimation.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '2',
    },
  },
})];
withEstimation.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?profileId=1&userId=2`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 3,
        },
      ],
    },
  ],
};
export const noEstimationDark = Template.bind({});
noEstimationDark.args = {
  profileId: '2',
};
noEstimationDark.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?profileId=2&userId=2`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: undefined,
        },
      ],
    },
  ],
};
noEstimationDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
