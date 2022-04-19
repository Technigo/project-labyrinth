import { createSlice } from '@reduxjs/toolkit';

export const questions = createSlice({
  name: 'questions',
  initialState: {
    username: null,
  },

  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
  },
});

// export const generateQuestion = () => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username,
//     }),
//   };

//   return (dispatch, getState) => {
//     fetch(``);
//   };
// };
