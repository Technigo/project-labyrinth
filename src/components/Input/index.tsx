import { InputContainer } from "./style";

const Input: React.FC<{
  type: string;
  value: string;
  onChange: any;
}> = ({ value, type, onChange }) => {
  return (
    <InputContainer
      value={value}
      type={type}
      onChange={onChange}
      placeholder="write your name"
    />
  );
};

export default Input;
