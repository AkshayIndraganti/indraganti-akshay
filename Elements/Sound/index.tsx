import React, { useRef, useState } from 'react';
import { Box, Line } from './Sound.Styled';

const SoundBar: React.FC = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const [click, setClick] = useState<boolean>(false);

  const handleClick = (): void => {
    setClick(!click);

    if (ref.current) {
      if (!click) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  };

  return (
    <Box onClick={handleClick}>
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio
        src="../src/app/assets/audio/u-said-it-v13-1167.mp3"
        ref={ref}
        loop
      >
        <track kind="captions" />
      </audio>
    </Box>
  );
};

export default SoundBar;
