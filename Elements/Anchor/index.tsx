import React, { useEffect, useRef } from 'react';
import { Anchor, Link } from '../../Components/AllSvgs';
import {
  Container,
  PreDisplay,
  Slider,
} from './Anchor.Styled';

interface AnchorComponentProp {
  number: number;
}

const AnchorComponent = ({
  number,
}: AnchorComponentProp) => {
  const ref = useRef<HTMLDivElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && hiddenRef.current) {
        const scrollPosition = window.pageYOffset;
        const windowSize = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;
        const diff = Math.max(
          bodyHeight - (scrollPosition + windowSize)
        );
        const diffP =
          (diff * 100) / (bodyHeight - windowSize);
        ref.current.style.transform = `translateY(${-diffP}%)`;

        if (window.pageYOffset > 5) {
          hiddenRef.current.style.display = 'none';
        } else {
          hiddenRef.current.style.display = 'block';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor
          width={70}
          height={70}
          fill="currentColor"
        />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(number)].map((x) => (
          <Link
            href="/"
            key={x.id}
            width={25}
            height={25}
            fill="currentColor"
            className="chain"
          />
        ))}
        <Anchor
          width={70}
          height={70}
          fill="currentColor"
        />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
