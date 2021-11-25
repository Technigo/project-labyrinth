import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNextMove } from "../reducers/game"; //fetching the second thunk(fetch-request)
import styled from "styled-components";

//import maze from "assets/Maze1.jpg";

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const OptionsDescription = styled.p`
  color: white;
`;

const OptionsActionCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
`;

const OptionsButton = styled.button`
  width: 60px;
`;

const MainDescription = styled.h1`
  color: white;
`;

const MainCoordinates = styled.p`
  color: white;
`;

const Maze = () => {
  const { description, coordinates, actions } = useSelector(
    (state) => state.game.gameStatus
  );
  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(fetchNextMove(type, direction));
  };

  const ActionCard = ({ description, type, direction }) => (
    <OptionsActionCard>
      <OptionsDescription>{description}</OptionsDescription>
      <OptionsButton onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </OptionsButton>
    </OptionsActionCard>
  );

  const setBgColor = () => {
    let bg =
      "url(https://images.unsplash.com/photo-1506704576233-888a18e8ebe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)";
    switch (coordinates) {
      case "0,0":
        bg =
          "url(https://images.unsplash.com/photo-1506704576233-888a18e8ebe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)";
        break;
      case "1,0":
        bg =
          "url(https://images.unsplash.com/photo-1506704576233-888a18e8ebe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)";
        break;
      case "1,1":
        bg =
          "url(https://images.unsplash.com/photo-1573560751378-c745aeaf4afd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)";
        break;
      case "0,1":
        bg =
          "url(https://images.unsplash.com/photo-1612630646667-d25adadaba8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)";
        break;
      case "0,2":
        bg =
          "url(https://images.unsplash.com/photo-1570967494795-ba97214cb2c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2836&q=80)";
        break;
      case "0,3":
        bg =
          "url(https://images.unsplash.com/photo-1610238115932-44c5c930fd3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)";
        break;
      case "1,3":
        bg =
          "url(https://images.unsplash.com/photo-1525850499459-5f565b646846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)";
        break;
      default:
        bg =
          "url(https://images.unsplash.com/photo-1506704576233-888a18e8ebe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)";
    }
    return bg;
  };
  return (
    <MainContainer style={{ backgroundImage: setBgColor() }}>
      <MainDescription>{description}</MainDescription>
      <MainCoordinates>{coordinates}</MainCoordinates>
      {actions.length === 0 && <h3>Wohooo you are free!</h3>}
      {actions.length > 0 &&
        actions.map((item) => <ActionCard key={item.direction} {...item} />)}
    </MainContainer>
  );
};

export default Maze;
