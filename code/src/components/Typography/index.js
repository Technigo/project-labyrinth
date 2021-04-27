import React from 'react';
import { Title, Text } from './style';

export const TypoTitle = ({ children }) => {
  return <Title>{children}</Title>;
};
export const TypoText = ({ children }) => {
  return <Text>{children}</Text>;
};
