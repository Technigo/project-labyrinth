import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialData, fetchNavigationData } from "../reducers/quest";
import { LoadingIndicator } from "./LoadingIndicator";
import { GameOver } from "./GameOver";
import { useBackground } from "./useBackground";
import { Container, QuestDescription, NavInfoCard } from "./QuestCard";
import { Btn } from "./GameOver";

export const QuestBody = () => {
  const questMoves = useSelector((store) => store.quest.items);
  const isLoading = useSelector((store) => store.ui.loading);

  const currentQuest = questMoves[questMoves.length - 1];
  console.log("current quest", currentQuest);
  const currentCoordinates = currentQuest?.coordinates;
  const currentDescription = currentQuest?.description;
  const dispatch = useDispatch();

  useBackground(currentCoordinates);

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  if (isLoading || !currentQuest) {
    return <LoadingIndicator />;
  }

  if (currentQuest.actions.length === 0) {
    return <GameOver description={currentDescription} />;
  }

  return (
    <>
      <Container>
        <QuestDescription>{currentQuest.description}</QuestDescription>

        {currentQuest.actions.map((action) => (
          <NavInfoCard alignSelf={"flex-start"} key={action.direction}>
            <p>{action.description}</p>
            <Btn
              borderRadius={8}
              width={94}
              height={44}
              marginTop={0}
              widthMedia={120}
              heighMedia={50}
              marginTopMedia={20}
              fontSize={14}
              color={"#3f3e3e"}
              borderColor={"#3f3e3e"}
              borderColorHover={"#3f3e3e"}
              colorHover={"#3f3e3e"}
              fontMedia={20}
              onClick={() => {
                dispatch(fetchNavigationData({ type: action.type, direction: action.direction }));
              }}
            >
              Go {action.direction}
            </Btn>
          </NavInfoCard>
        ))}
      </Container>
    </>
  );
};
