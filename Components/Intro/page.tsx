import React from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image';

import { Box, SubBox, Text } from './Intro.Styled';
// import Me from '../assets/Images/profile-img.png';

const Intro = () => (
  <Box
    initial={{ height: 0 }}
    animate={{ height: '55vh' }}
    transition={{ type: 'spring', duration: 2, delay: 1 }}
  >
    <SubBox>
      <Text>
        <h1>Hello,</h1>
        <h3>I'm Akshay I</h3>
        <h6>Web Developer With Good Designing skills</h6>
      </Text>
    </SubBox>
    <SubBox>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {/* <Image className="pic" src={Me} alt="Profile Pic" /> */}
      </motion.div>
    </SubBox>
  </Box>
);

export default Intro;
