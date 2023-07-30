import styled from 'styled-components';
import { DarkTheme } from '../../Components/Themes';

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === 'dark'
      ? DarkTheme.text
      : DarkTheme.body};
  font-family: 'Passions Conflict', cursive;
  text-transform: capitalize;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

export default Logo;
