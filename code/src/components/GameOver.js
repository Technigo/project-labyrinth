import React from "react";

import { Button } from "../lib/Buttons";

export const GameOver = () => {
  return (
    <>
      <Button onClick={() => window.location.reload()} title="play again" />
    </>
  );
};
