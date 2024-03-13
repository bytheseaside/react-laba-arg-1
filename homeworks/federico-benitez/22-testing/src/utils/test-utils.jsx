import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

const AllTheProviders = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

afterEach(() => {
  cleanup();
});

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
