import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { game, gameStart } from "../reducers/game";

// export const FirstPage = () => {
//   const firstPage = useSelector((store) => store.action.payload);
//   const dispatch = useDispatch();
  
  export const FirstPage = () => {
    const [input, setInput] = useState ('')
  
    const dispatch = useDispatch();
  
    const onSubmitUsername = () => {
      dispatch(game.actions.gameStart(input));
      
    };
  
  return (
    <>
     <input 
        type="text" 
        value={input}
        onChange={(event) => setInput(event.target.value)}
        />
      <button onClick={onSubmitUsername}>Submit</button>
    </>
  );
};
export default FirstPage;