import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchGameInstructions } from 'reducers/game';

const GameButton = styled.button`
    margin: 10px auto;
    width: 160px;
    letter-spacing: 2px;
    border-radius: 8px;
    font-family: 'Libre Baskerville', serif;
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

const Box = styled.div`
  height: 100px;
  width: 300px;
`;
const Arrow = styled.p`
  font-size: 20px;
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
    <Box>
      <GameButton
        onClick={() => {
          dispatch(fetchGameInstructions({ direction: item.direction }));
        }}
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
        key={item.description}
        onTouchEnd={() => {
          dispatch(fetchGameInstructions({ direction: item.direction }));
        }}
      >
        {item.type} {item.direction.toLowerCase()}
      </GameButton>
      <Arrow onClick={() => onToggleClass()}> &#8964;</Arrow>
      {isHovering ? <p>{item.description}</p> : null}
      {isActive ? <p>{item.description}</p> : null}
    </Box>
  );
};

export default Button;
//   const [isActive, setActive] = useState(false);
//   const dispatch = useDispatch();
//   const onToggleClass = () => {
//     setActive(!isActive);
//   };
