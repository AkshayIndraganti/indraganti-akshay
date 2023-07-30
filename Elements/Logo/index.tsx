import React from 'react';
import Link from 'next/link';
import Logo from './Logo.styled';

interface LogoProps {
  theme: string;
}

const LogoComponent = ({ theme }: LogoProps) => (
  <Link href="/">
    <Logo color={theme}>Aksin</Logo>
  </Link>
);

export default LogoComponent;
