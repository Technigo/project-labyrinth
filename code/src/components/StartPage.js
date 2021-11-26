import React, { useState } from "react";
import Labyrinth, { fetchLabyrinth } from "reducers/Labyrinth";
import { useDispatch } from "react-redux";
import Lottie from "react-lottie";
import animationData from "../lotties/Background";
import animationBtn from "../lotties/btn";
import sea from "sounds/sea.mp3"
import arr from "sounds/arr.mp3"

export const StartPage = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsBtn = {
    loop: true,
    autoplay: true,
    animationData: animationBtn,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
let arrsound = new Audio(arr);
  let sound =  new Audio(sea);
  const SoundPlay = () => {
    arrsound.play();
    sound.play();
  };




  

  const onClickStart = () => {
    if (username === "") {
    } else {
      dispatch(Labyrinth.actions.setUsername(username));
      dispatch(fetchLabyrinth());
      SoundPlay()
    }
  };

  return (
    <section className="startPageContainer">
      <Lottie
        className="animationBackground"
        options={defaultOptions}
        style={{
          position: "absolute",
        }}
      />
      <section className="startPageContetnt">
        <div className="StartPageHeader">
          <section className="StartPageHeaderSection">
            <div className="StartPageHeaderInner">
              Find
              <br />
              the
              <br />
              Treasure
              <br />
            </div>
          </section>
        </div>

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
            <Lottie
              options={defaultOptionsBtn}
              height={50}
              width={170}
              style={{
                position: "absolute",
                zIndex: "-1",
              }}
            />
            <button onClick={onClickStart} className="startPageBtn">
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
