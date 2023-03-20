import React from 'react';
import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/shared/styles/customTheme';
import { GlobalStyle } from '../src/shared/styles/global';

const withTheme: Decorator = (StoryFn) => {
  return (
    <ThemeProvider theme={theme}>
      <StoryFn />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme];
