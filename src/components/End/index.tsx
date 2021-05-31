import { useSelector } from "react-redux";
import { Description } from "../Decision/style";

const End: React.FC = () => {
  const username = useSelector((store: any) => store.gameFetch.username);
  return (
    <div>
      <Description>{username} well down you finish this game</Description>
    </div>
  );
};

export default End;
