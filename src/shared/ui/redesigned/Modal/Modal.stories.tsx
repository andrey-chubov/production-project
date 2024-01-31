import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Modal } from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus,quidem repellat qui voluptatum, non quis a beatae totam temporibus consequuntur blanditiis autem at vel aliquam velit laboriosam illo eaque.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Normal = Template.bind({});
Normal.args = {
  isOpen: true,
  children:
    '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus,quidem repellat qui voluptatum, non quis a beatae totam temporibus consequuntur blanditiis autem at vel aliquam velit laboriosam illo eaque.',
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];
export const Orange = Template.bind({});
Orange.args = {
  isOpen: true,
  children:
    '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus,quidem repellat qui voluptatum, non quis a beatae totam temporibus consequuntur blanditiis autem at vel aliquam velit laboriosam illo eaque.',
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
