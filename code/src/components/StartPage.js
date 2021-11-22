import React from "react";
import { fetchLabyrinth } from "reducers/Labyrinth";
import {  useDispatch } from "react-redux";


export const StartPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
    
      <button
        onClick={() => {
          dispatch(fetchLabyrinth());
        }}
      >
      
        Start Game
      </button>
    </div>
  );
};
