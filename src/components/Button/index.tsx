import { ButtonContainer } from "./style";

const Button: React.FC<{
  type: "submit" | "reset" | "button";
  onClick: any;
  text: string;
}> = ({ type, onClick, text }) => {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
