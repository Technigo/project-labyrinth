import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../reducers/quest";

export const Start = () => {
  const quest = useSelector((store) => store.quest.items);
  const player = useSelector((store) => store.quest.player);
  console.log("quest", quest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <h1>hello {player}</h1>
      {quest.map((item) => {
        return (
          <div key={item.coordinates}>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
};
