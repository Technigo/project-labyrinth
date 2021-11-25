import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const initialState = {
  player: "",
  items: [],
  moveHistory: [],
};

export const quest = createSlice({
  name: "quest",
  initialState: initialState,
  reducers: {
    selectData: (state, action) => {
      state.items.push(action.payload);
      console.log("action.payload", action.payload);
    },
    setPlayersName: (state, action) => {
      const playerName = action.payload;
      state.player = playerName;
      console.log("playersName", playerName);
    },
    setHistory: (state, action) => {
      state.moveHistory.push(action.payload);
      console.log("moveHistory", action.payload);
    },
    resetGame: () => {
      return initialState;
    },
  },
});

export const fetchInitialData = () => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: state.quest.player }),
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error();
        }
        return res.json();
      })
      .then((json) => {
        dispatch(quest.actions.selectData(json));
        dispatch(ui.actions.setLoading(false));
      })
      .catch((error) => {
        dispatch(ui.actions.setError(true));
      });
  };
};

export const fetchNavigationData = ({ type, direction }) => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(quest.actions.setHistory(direction));
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: state.quest.player, type, direction }),
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error();
        }
        return res.json();
      })
      .then((json) => {
        dispatch(quest.actions.selectData(json));
        dispatch(ui.actions.setLoading(false));
      })
      .catch((error) => {
        dispatch(ui.actions.setError(true));
      });
  };
};

export const selectLabyrinth = (state) => {
  const rooms = state.quest.items.filter((item, index) => state.quest.items.findIndex((it) => it.coordinates === item.coordinates) === index);
  return rooms;
};
