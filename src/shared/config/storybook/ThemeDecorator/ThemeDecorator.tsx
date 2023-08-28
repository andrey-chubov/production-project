import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProider';

export const ThemeDecorator = (theme: Theme) => (story: ()=> Story) => (
  <div className={`app ${theme}`}>
    {story()}
  </div>
);
