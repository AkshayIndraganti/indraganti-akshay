import styled from 'styled-components';
import { DarkTheme } from '../Themes';

export const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 4.8rem;
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.color === 'dark'
      ? DarkTheme.text
      : DarkTheme.body};
  text-transform: capitalize;
`;
