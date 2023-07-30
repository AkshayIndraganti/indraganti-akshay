import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
} from '../../Components/AllSvgs';
import { DarkTheme } from '../../Components/Themes';
import { Icons, Line } from './Socialcons.Styled';

interface IconsProps {
  theme: string;
}

const SocialIcons: React.FC<IconsProps> = ({ theme }) => (
  <Icons>
    <motion.div
      initial={{ transform: 'scale(0)' }}
      animate={{ scale: [0, 1, 1.5, 1] }}
      transition={{
        type: 'spring',
        duration: 1,
        delay: 1,
      }}
    >
      <Link
        href="https://github.com/AkshayIndraganti"
        target="_blank"
      >
        <Github
          width={25}
          height={25}
          fill={
            theme === 'dark'
              ? DarkTheme.text
              : DarkTheme.body
          }
        />
      </Link>
    </motion.div>

    <motion.div
      initial={{ transform: 'scale(0)' }}
      animate={{ scale: [0, 1, 1.5, 1] }}
      transition={{
        type: 'spring',
        duration: 1,
        delay: 1.2,
      }}
    >
      <Link
        href="https://twitter.com/Aksin03"
        target="_blank"
      >
        <Twitter
          width={25}
          height={25}
          fill={
            theme === 'dark'
              ? DarkTheme.text
              : DarkTheme.body
          }
        />
      </Link>
    </motion.div>

    <motion.div
      initial={{ transform: 'scale(0)' }}
      animate={{ scale: [0, 1, 1.5, 1] }}
      transition={{
        type: 'spring',
        duration: 1,
        delay: 1.4,
      }}
    >
      <Link
        href="https://www.linkedin.com/in/indragantiakshay/"
        target="_blank"
      >
        <Linkedin
          width={25}
          height={25}
          fill={
            theme === 'dark'
              ? DarkTheme.text
              : DarkTheme.body
          }
        />
      </Link>
    </motion.div>

    <Line
      color={theme}
      initial={{
        height: 0,
      }}
      animate={{
        height: '8rem',
      }}
      transition={{
        type: 'spring',
        duration: 1,
        delay: 0.8,
      }}
    />
  </Icons>
);

export default SocialIcons;
