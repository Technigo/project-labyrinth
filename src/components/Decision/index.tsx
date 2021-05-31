import { useDispatch, useSelector } from "react-redux";

import { onDecision } from "../../redux/gameSlice";

import Button from "../Button";
import End from "../End";

import { DecisionContainer, Text, Description, ButtonContainer } from "./style";

const Decision: React.FC = () => {
  const description = useSelector((store: any) => store.gameFetch.description);
  const actions = useSelector((store: any) => store.gameFetch.actions);
  const coordinates = useSelector((store: any) => store.gameFetch.coordinates);

  const dispatch = useDispatch();

  const onDecide = (direction: any) => {
    dispatch(onDecision(direction));
  };

  return (
    <DecisionContainer>
      {coordinates === "1,3" && <End />}
      <Text>{description}</Text>
      {actions.map((action: any) => {
        return (
          <div key={action.direction}>
            <p>{action.coordinates}</p>
            <Description>{action.description}</Description>
            <ButtonContainer>
              <Button
                text={`Go ${action.direction}`}
                type="submit"
                onClick={(e: any) => onDecide(action.direction)}
              />
            </ButtonContainer>
          </div>
        );
      })}
    </DecisionContainer>
  );
};

export default Decision;
