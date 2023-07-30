import Link from 'next/link';
import React from 'react';
import { Github } from '../../Components/AllSvgs';
import {
  Box,
  Description,
  Footer,
  Git,
  Item,
  LinkWrapper,
  Tag,
  Tags,
  Title,
} from './Card.Styled';

interface CardProps {
  id: number;
  name: string;
  description: string;
  tags: string[];
  demo: string;
  github: string;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  tags,
  demo,
  github,
}) => (
  <Box key={id} variants={Item}>
    <Title>{name}</Title>
    <Description>{description}</Description>
    <Tags>
      {tags.map((t) => (
        <Tag key={t}>#{t}</Tag>
      ))}
    </Tags>
    <Footer>
      <Link href={demo} passHref>
        <LinkWrapper target="_blank">Visit</LinkWrapper>
      </Link>
      <Link href={github} passHref>
        <Git target="_blank">
          <Github width={30} height={30} />
        </Git>
      </Link>
    </Footer>
  </Box>
);

export default Card;
