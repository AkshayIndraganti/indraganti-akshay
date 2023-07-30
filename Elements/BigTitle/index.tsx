import React from 'react';
import { BigTitleProps, Text } from './BigTitle.Styled';

const BigTitle = ({
  top,
  left,
  right,
  text,
}: BigTitleProps) => (
  <Text top={top} left={left} right={right} text={text} />
);

export default BigTitle;
