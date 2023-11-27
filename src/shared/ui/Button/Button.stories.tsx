import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
  theme: ButtonTheme.CLEAR,

};
export const ClearDark = Template.bind({});
ClearDark.args = {

  children: 'Text',
  theme: ButtonTheme.CLEAR,

};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearInverted = Template.bind({});
ClearInverted.args = {

  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,

};
export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {

  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,

};
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
export const Outline = Template.bind({});
Outline.args = {

  children: 'Text',
  theme: ButtonTheme.OUTLINE,

};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {

  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,

};
export const OutlineDark = Template.bind({});
OutlineDark.args = {

  children: 'Text',
  theme: ButtonTheme.OUTLINE,

};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlineDarkSizeL = Template.bind({});
OutlineDarkSizeL.args = {

  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,

};
OutlineDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {

  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const OutlineInverted = Template.bind({});
OutlineInverted.args = {

  children: 'Text',
  theme: ButtonTheme.OUTLINE_INVERTED,

};

export const Background = Template.bind({});
Background.args = {

  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};
export const Square = Template.bind({});
Square.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.L,
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.XL,
};
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Войти',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
};
export const DisabledDark = Template.bind({});
DisabledDark.args = {
  children: 'Войти',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];
