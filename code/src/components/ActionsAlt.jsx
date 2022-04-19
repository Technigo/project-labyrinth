import React from "react";

const ActionsAlt = ({ actions }) => {
  console.log(actions.map((action) => action.direction));

  return (
    <>
      <button>North</button>
      <button>East</button>
      <button>South</button>
      <button>West</button>
    </>
  );
};

export default ActionsAlt;
