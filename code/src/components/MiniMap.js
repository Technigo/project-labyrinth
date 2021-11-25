import React from "react";
import { useSelector } from "react-redux";
import { selectLabyrinth } from "reducers/quest";
import styled from "styled-components";

const Map = styled.div`
  width: 100%;
  padding-bottom: 50%;
  position: relative;
`;

// const wallColor = "rgba(255,255,255, .8)";
const wallColor = "2px solid rgba(0,0,0, .8)";

const Room = styled.div`
  position: absolute;
  //also possible to change background
  //background: ${(props) => (props.active ? "rgba(0, 0, 0, .3)" : "rgba(255, 255, 255, 0.4)")};
  background: rgba(255, 255, 255, 0.4);
  border-top: ${(props) => (props.top ? "none" : wallColor)};
  border-left: ${(props) => (props.left ? "none" : wallColor)};
  border-bottom: ${(props) => (props.bottom ? "none" : wallColor)};
  border-right: ${(props) => (props.right ? "none" : wallColor)};
  bottom: ${(props) => props.cay * 25 + 0}%;
  left: ${(props) => props.cax * 41 + 10}%;
  width: 40%;
  height: 24%;
  box-sizing: border-box;

  ${(props) =>
    props.active &&
    `
   &:after {
    content: "";
    position: absolute;
    top: calc(50% - 5px);
    left: calc(50% - 5px);
    background: #fff;
    width: 10px;
    height: 10px;
    border-radius: 100%;
   }
  `}
`;

export const MiniMap = () => {
  const labyrinth = useSelector(selectLabyrinth);
  const questMoves = useSelector((store) => store.quest.items);
  const currentQuest = questMoves[questMoves.length - 1];
  console.log("lab", labyrinth);
  return (
    <Map>
      {labyrinth.map((room) => (
        <Room
          key={room.coordinates}
          cax={room.coordinates.split(",")[0]}
          cay={room.coordinates.split(",")[1]}
          top={room.actions.find((action) => action.direction === "North")}
          left={room.actions.find((action) => action.direction === "West")}
          bottom={room.actions.find((action) => action.direction === "South")}
          right={room.actions.find((action) => action.direction === "East")}
          active={currentQuest.coordinates === room.coordinates}
        />
      ))}
    </Map>
  );
};
