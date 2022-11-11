import React from "react";

const Look = ({ response, setLooking }) => {

  // const nextDirection = response.actions?.map((action) => action.direction);

  const onLookClick = () => {
    setLooking(true);
  };

  return (
    <label htmlFor="look">
      <input type="radio" className="nes-radio" id="look" onClick={() => onLookClick()} />
      {response.actions?.map((action) => <span>Look {action.direction}</span>)}    
    </label>
  );
};

export default Look;