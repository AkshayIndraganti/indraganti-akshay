import React from 'react';
import { motion } from 'framer-motion';

import LogoComponent from '../../Elements/Logo';
import PowerButton from '../../Elements/PowerButton';
import SocialIcons from '../../Elements/SocialIcons/SocialIcons';
import { YinYang } from '../AllSvgs';
import Intro from '../Intro/page';
import {
  ABOUT,
  BottomBar,
  Center,
  Contact,
  Container,
  DarkDiv,
  MainContainer,
  SKILLS,
  WORK,
} from './Landing.Styled';

const Main = () => {
  const [click, setClick] = React.useState<
    boolean | number
  >(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'} />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 60 : 200}
            height={click ? 60 : 200}
            fill="currentColor"
          />
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
            onClick={() => handleClick()}
          >
            Click Here
          </motion.h2>
        </Center>

        <Contact
          target="_blank"
          href={{
            pathname: 'mailto:akshayindraganti@gmail.com',
          }}
        >
          <motion.h2
            initial={{
              y: -200,
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
            Say hi..
          </motion.h2>
        </Contact>
        <WORK href="/work" click={+click}>
          <motion.h2
            initial={{
              y: -200,
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
        <BottomBar>
          <ABOUT href="/about" click={+click}>
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
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS href="/skills">
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
              My Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro /> : null}
    </MainContainer>
  );
};

export default Main;
