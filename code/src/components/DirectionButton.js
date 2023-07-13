import React from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'; // East
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'; // West
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'; // South
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'; // North
import { Button } from 'reusableComponents/Button';

const iconsMap = {
  East: ArrowForwardRoundedIcon,
  West: ArrowBackRoundedIcon,
  South: ArrowDownwardRoundedIcon,
  North: ArrowUpwardRoundedIcon
};

export const DirectionButton = ({ route, onClick, onKeyDown }) => {
  const Icon = iconsMap[route] || null;
  return (
    <Button
      tabIndex={0}
      direction
      onClick={onClick}
      onKeyDown={onKeyDown}>{Icon && <Icon />}
    </Button>
  )
};