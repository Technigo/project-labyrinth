import React from "react";
import styled from "styled-components/macro";

import fox from '../assets/fox_1.svg'

const AvatarPlaceholder = styled.div`
  grid-area: avatar;
  align-self: center;
  justify-self: center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = () => {
  return (
    <AvatarPlaceholder>
      <img src={fox} alt='Avatar Foxy'/>
    </AvatarPlaceholder>
  );
};