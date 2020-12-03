import React from "react";
import styled from "styled-components/macro";

const AvatarPlaceholder = styled.div`
  grid-area: avatar;
  width: 50%;
  height: 50%;
  align-self: center;
  justify-self: center;
  text-align: center;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = () => {
  return (
    <AvatarPlaceholder>
      <p>Avatar</p>
    </AvatarPlaceholder>
  );
};