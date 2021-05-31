import { useState } from "react";
import { useDispatch } from "react-redux";

import gameFetch, { onGameStart } from "../../redux/gameSlice";

import Input from "../Input";
import Button from "../Button";

import { ButtonContainer, IntroContainer, Text } from "./style";

const Intro: React.FC = () => {
  const [name, setName] = useState<string>("");

  const dispatch = useDispatch();

  const onNameSet = () => {
    dispatch(gameFetch.actions.setName(name));
    dispatch(onGameStart(name));
  };

  return (
    <IntroContainer>
      <Text>Welcome to game. Please tell us your name.</Text>
      <Input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setName(e.target.value)
        }
      />
      <ButtonContainer>
        <Button text="start" type="submit" onClick={onNameSet} />
      </ButtonContainer>
    </IntroContainer>
  );
};

export default Intro;
