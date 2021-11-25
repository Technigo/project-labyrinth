import { useEffect } from "react";

// import bg pics
import arch from "../assets/path1.jpg";
import colorful from "../assets/road.jpg";
import end from "../assets/cosmos.jpg";
import lights from "../assets/bridge.jpg";
import mechanic from "../assets/pix.jpg";
import melody from "../assets/wall.jpg";
import paper from "../assets/books.jpg";

export const useBackground = (currentCoordinates) => {
  useEffect(() => {
    let bgImg;
    switch (currentCoordinates) {
      case "0,0":
        bgImg = arch;
        break;
      case "1,0":
        bgImg = lights;
        break;
      case "1,1":
        bgImg = colorful;
        break;
      case "0,1":
        bgImg = mechanic;
        break;
      case "0,2":
        bgImg = melody;
        break;
      case "0,3":
        bgImg = paper;
        break;
      case "1,3":
        bgImg = end;
        break;
      default:
        bgImg = arch;
    }
    document.body.style.backgroundImage = `url(${bgImg})`;
  }, [currentCoordinates]);
};
