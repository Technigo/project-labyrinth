import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Loading = () => {
  return (
    <motion.div
      animate={{ x: 300 }}
      transition={{ type: 'tween', duration: 4 }}>
      <Image alt="loading" src="https://media.tenor.com/qCwhgTgV-8YAAAAi/go-walking-leaving.gif" />
    </motion.div>
  )
};

export const Image = styled.img`
  height: 350px;
  width: auto;
  margin: 20% 0 0 10%;
`