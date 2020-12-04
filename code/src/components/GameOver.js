import React from "react";

import { Button } from "../lib/Buttons";

export const GameOver = () => {
  return (
      <Button onClick={() => {
        window.location.reload();
        localStorage.clear();
        }} title="play again" />
  );
};
