import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    description: '',
    actions: [
      {
        type: '',
        direction: '',
        description: '',
      },
    ],
    coordinates: '',
    user: null,
  },
  reducers: {
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload;
    },
    setActions: (store, action) => {
      store.actions = action.payload;
    },
    /*tillagd funktion för att kunna spara user i initialState*/
    setUserState: (store, action) => {
      store.user = action.payload;
    },
  },
});

/*angivit direction och type som parametrar som body:n tar emot för att denna ska uppdateras varje gång man kör en ny fetch 
type=null, direction=null är för att i första if (mode===start) så stoppar vi inte in ngt move eller type, därför behöver de ha ett defaultvärde*/
export const fetchInit = (user, type = null, direction = null, mode) => {
  if (mode === 'start') {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user,
      }),
    };
  } else if (mode === 'next') {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user,
        type: type,
        direction: direction,
      }),
    };
  }
};

export const fetchStart = () => {
  return (dispatch, getState) => {
    // dispatch(game.actions.setLoading(true))
    fetch(
      'https://wk16-backend.herokuapp.com/start',
      fetchInit(getState().game.user, null, null, 'start')
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setDescription(json.description));
        dispatch(game.actions.setCoordinates(json.coordinates));
        dispatch(game.actions.setActions(json.actions));
        // dispatch(game.actions.setLoading(false))
      });
  };
};

/*här tar vi alltså emot direction och type vid varje knapp-klick, som ger oss de nya alternativen vid varje ny fetch-request*/
export const fetchNext = (direction, type) => {
  return (dispatch, getState) => {
    fetch(
      'https://wk16-backend.herokuapp.com/action',
      fetchInit(getState().game.user, type, direction, 'next')
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setDescription(json.description));
        dispatch(game.actions.setCoordinates(json.coordinates));
        dispatch(game.actions.setActions(json.actions));
      });
  };
};
