import React, { useState } from "react";
import Labyrinth, { fetchLabyrinth } from "reducers/Labyrinth";
import { useDispatch } from "react-redux";
import Lottie from "react-lottie";
import animationData from "../lotties/Background";

export const StartPage = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const start = () => {
    if (username === "") {
    } else {
      dispatch(Labyrinth.actions.setUsername(username));
      dispatch(fetchLabyrinth());
    }
  };

  return (
    <section className="startPageContainer">
      <Lottie className="animationBackground" options={defaultOptions} style={{ 
           
            position: 'absolute',

          }}/>
      <section className="startPageContetnt"> 
      <input
        className="textInput"
        required
        maxLength="15"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username.length > 0 ? (
        <div className="OnclickTextOrBtn">
        <button onClick={start} className="startPageBtn">
          {" "}
          Welcome{" "}
        </button>
        </div>
      ) : (
        <div className="OnclickTextOrBtn">
        <p className="textStartPage">Fill in your name </p>
        </div>
      )}
      </section>
    </section>
  );
};
