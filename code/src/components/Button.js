import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchGameInstructions } from "reducers/game";

const GameButton = styled.button`
  margin: 10px auto;
  width: 160px;
  letter-spacing: 2px;
  border-radius: 8px;
  font-family: "Libre Baskerville", serif;
  color: #ffc000;
  font-size: 18px;
  font-weight: 400;
  text-shadow: 0 1px 3px #000;
  text-align: center;
  padding: 10px 0;
  background: radial-gradient(circle, #8b0000, #8b0000);
  border-top: 4px ridge #ffb000;
  border-left: 4px groove #ffb000;
  border-right: 4px ridge #ffb000;
  border-bottom: 4px groove #ffb000;
  box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);

  @media (min-width: 768px) {
    width: 200px;
  }

  &:hover {
    background: radial-gradient(circle, #e52b2b, #8b0000);
    box-shadow: 0px 0 5px 5px rgba(255, 255, 255, 0.2);
  }

  &:active {
    background: radial-gradient(circle, #ec6a6a, #e52b2b);
    box-shadow: 0px 0 5px 5px rgba(255, 255, 255, 0.2);
  }
`;

const QuestionBox = styled.div`
  height: 100px;
  width: 200px;

  p {
    font-size: 20px;
    color: white;
  }
`;
const ArrowDown = styled.p`
  font-size: 40px;
  margin: 0px;
  padding: 0px;
  text-align: center;
`;

const Button = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();

  const onToggleClass = () => {
    setActive(!isActive);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  console.log(isHovering);

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <GameButton
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
        key={item.description}
        onClick={() => {
          dispatch(fetchGameInstructions({ direction: item.direction }));
        }}
      >
        {item.type} {item.direction.toLowerCase()}
      </GameButton>
      <ArrowDown onClick={() => onToggleClass()}> &#8964;</ArrowDown>
      {isHovering ? <QuestionBox>{item.description}</QuestionBox> : null}
      {isActive ? <QuestionBox>{item.description}</QuestionBox> : null}
    </>
  );
};

export default Button;
//   const [isActive, setActive] = useState(false);
//   const dispatch = useDispatch();
//   const onToggleClass = () => {
//     setActive(!isActive);
//   };
