import React from "react";

export const Switcher = () => {
  switch (currentStep.coordinates) {
    case "0,0":
      return <MainGame />;

    case "1,0":
      return <MainGame />;
    case "1,1":
      return <MainGame />;

    case "0,1":
      return <MainGame />;
    case "0,2":
      return <MainGame />;
    case "0,3":
      return <MainGame />;
    case "1,3":
      return <MainGame />;
    default:
      return <MainGame />;
  }
};
