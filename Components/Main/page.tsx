import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { DarkTheme } from '../Themes';
import {
  Box,
  Main,
  Rotate,
  container,
} from './Main.Styled';
import LogoComponent from '../../Elements/Logo';
import SocialIcons from '../../Elements/SocialIcons/SocialIcons';
import BigTitle from '../../Elements/BigTitle';
import PowerButton from '../../Elements/PowerButton';
import Card from '../../Elements/Card';
import { YinYang } from '../AllSvgs';
import { Work, WorkProp } from '../../data/WorkData';

const WorkPage: React.FC = () => {
  const ref = useRef<HTMLUListElement | null>(null);
  const yinyang = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    const rotate = () => {
      if (element) {
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
      }

      if (yinyang.current) {
        yinyang.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
      }
    };

    window.addEventListener('scroll', rotate);
    return () => {
      window.removeEventListener('scroll', rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <Main
          ref={ref}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {Work.map((data: WorkProp) => (
            <Card
              key={data.id}
              id={data.id}
              name={data.name}
              description={data.description}
              tags={data.tags}
              demo={data.demo}
              github={data.github}
            />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang
            width={80}
            height={80}
            fill={DarkTheme.text}
          />
        </Rotate>
        <BigTitle
          text="WORK"
          top="10%"
          right="20%"
          left="0"
        />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
