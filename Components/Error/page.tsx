import React from 'react';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import { Logo, Wrapper } from './Error.styled';
import { lightTheme } from '../Themes';

interface ErrorProps {
  theme: string;
}

const Error = ({ theme }: ErrorProps) => (
  <ThemeProvider theme={lightTheme}>
    <Wrapper>Page Not Found</Wrapper>
    <Link className="btn" role="button" href="/">
      <Logo color={theme}>Go Back</Logo>
    </Link>
  </ThemeProvider>
);

export default Error;
