import { game } from "./game";
import { ui } from "./ui";

export const getStartGame = () => {
  const startGameURL = "https://wk16-backend.herokuapp.com/start";

  return (dispatch, getStore) => {
    dispatch(ui.actions.setLoading(true));
    fetch(startGameURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username: getStore().game.username }),
    })
      .then(res => res.json())
      .then(gameData => {
        dispatch(game.actions.setCurrentGameState({ gameData }));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export const selectNextStep = (type, direction, coordinates) => {
  const nextStepURL = "https://wk16-backend.herokuapp.com/action";

  return (dispatch, getStore) => {
    dispatch(ui.actions.setLoading(true));
    fetch(nextStepURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: getStore().game.username,
        type: type,
        direction: direction,
      }),
    })
      .then(res => res.json())
      .then(gameData => {
        dispatch(game.actions.setCurrentGameState({ gameData }));
        dispatch(game.actions.setPastActions(direction));
        dispatch(game.actions.setCoordinates(coordinates));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
