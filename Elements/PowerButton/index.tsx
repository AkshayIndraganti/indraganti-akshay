import React from 'react';
import Link from 'next/link';
import { PowerBtn } from '../../Components/AllSvgs';
import Power from './PowerButton.Styled';

const PowerButton = () => (
  <Power>
    <Link href="/">
      <PowerBtn
        width={30}
        height={30}
        fill="currentColor"
      />
    </Link>
  </Power>
);

export default PowerButton;
