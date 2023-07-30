import React from 'react';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { DarkTheme } from '../Themes';
import astronaut from '../assets/Images/spaceman.png';
import {
  Box,
  Main,
  BottomBar,
  WORK,
  SKILLS,
  Spaceman,
} from './About.Styled';
import LogoComponent from '../../Elements/Logo';
import SocialIcons from '../../Elements/SocialIcons/SocialIcons';
import PowerButton from '../../Elements/PowerButton';
import BigTitle from '../../Elements/BigTitle';

const About = () => {
  const click: boolean = false;

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <Spaceman>
          <Image src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          As a Full Stack developer from India, I enjoy
          using popular frameworks such as React, Node,
          Express, and MongoDB to create websites. My
          interests in logic building and problem solving
          led me to pursue web development as a passion and
          specialize in JavaScript libraries and frameworks.
        </Main>

        <BigTitle
          text="ABOUT"
          top="10%"
          left="5%"
          right="0"
        />
      </Box>
      <BottomBar>
        <WORK href="/work" click={click ? 1 : 0}>
          <motion.h2
            initial={{
              y: 200,
            }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1,
              },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>
        <SKILLS href="/skills">
          <motion.h2
            initial={{
              y: 200,
            }}
            animate={{
              y: 0,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            My Skills.
          </motion.h2>
        </SKILLS>
      </BottomBar>
    </ThemeProvider>
  );
};

export default About;
