import React from 'react';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import { Design, Develope } from '../AllSvgs';
import { lightTheme } from '../Themes';
import BigTitlte from '../../Elements/BigTitle';
import LogoComponent from '../../Elements/Logo';
import PowerButton from '../../Elements/PowerButton';
import { Box } from '../About/About.Styled';
import {
  BottomBar,
  Description,
  Main,
  Title,
  WORK,
  ABOUT,
} from './Skills.Styled';

const MySkillsPage = () => {
  const click: boolean = false;
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <PowerButton />
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I can create unique and minimalistic design.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Design</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
              <li>Canva</li>
            </ul>
          </Description>
        </Main>

        {/* Frontend skills page */}

        <Main>
          <Title>
            <Develope width={40} height={40} /> FullStack
            Developer
          </Title>
          <Description>
            I am Full-stack developer, I can create websites
            using MERN Stack.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, JavaScript, React, Nodejs, Mongodb,
              Express and Typescript.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Postman</p>
          </Description>
        </Main>

        <BigTitlte
          text="SKILLS"
          top="80%"
          right="30%"
          left="0"
        />
      </Box>
      <BottomBar>
        <ABOUT href="/about">
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
            About
          </motion.h2>
        </ABOUT>
        <WORK href="/work" click={+click}>
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
            Work
          </motion.h2>
        </WORK>
      </BottomBar>
    </ThemeProvider>
  );
};

export default MySkillsPage;
