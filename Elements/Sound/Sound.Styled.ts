import styled, { keyframes } from 'styled-components';

interface Theme {
  text: string;
  body: string;
}

interface LineProps {
  click: boolean;
  theme?: Theme;
}

export const play = keyframes`
  0%{
    transform: scaleY(1);
  }
  50%{
    transform: scaleY(2);
  }
  100%{
    transform: scaleY(1);
  }
`;

export const Line = styled.span<LineProps>`
  background: ${(props) => props.theme?.text};
  border: 1px solid ${(props) => props.theme?.body};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) =>
    props.click ? 'running' : 'paused'};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

export const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 7rem;
  top: 2.5rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;