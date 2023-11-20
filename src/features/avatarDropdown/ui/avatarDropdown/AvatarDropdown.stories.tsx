import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from 'entities/User';
import { AvatarDropdown } from './AvatarDropdown';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: '150px' }}><Story /></div>,
  ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [StoreDecorator({
  user: {
    authData: {
      username: 'test',
      roles: [UserRole.ADMIN],
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
      id: '1',
    },
  },
})];
export const User = Template.bind({});
User.args = {};
User.decorators = [StoreDecorator({
  user: {
    authData: {
      username: 'test',
      roles: [UserRole.USER],
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
      id: '1',
    },
  },
})];
