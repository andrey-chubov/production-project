import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      firstName: 'Андрей',
      lastName: 'Чубов',
      age: 1,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
  },
})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
  profile: {
    form: {
      firstName: 'Андрей',
      lastName: 'Чубов',
      age: 1,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
  },
}), ThemeDecorator(Theme.DARK)];
