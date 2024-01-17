import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: 'clear',
};
export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  variant: 'clear',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  variant: 'clearInverted',
};
export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
  children: 'Text',
  variant: 'clearInverted',
};
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  variant: 'outline',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  variant: 'outline',
  size: 'xl',
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlineDarkSizeL = Template.bind({});
OutlineDarkSizeL.args = {
  children: 'Text',
  variant: 'outline',
  size: 'l',
};
OutlineDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  variant: 'backgroundInverted',
};

export const OutlineInverted = Template.bind({});
OutlineInverted.args = {
  children: 'Text',
  variant: 'outlineInverted',
};

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  variant: 'background',
};
export const Square = Template.bind({});
Square.args = {
  children: '>',
  square: true,
  variant: 'backgroundInverted',
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  square: true,
  variant: 'backgroundInverted',
  size: 'l',
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  square: true,
  variant: 'backgroundInverted',
  size: 'xl',
};
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Войти',
  variant: 'outline',
  disabled: true,
};
export const DisabledDark = Template.bind({});
DisabledDark.args = {
  children: 'Войти',
  variant: 'outline',
  disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];
