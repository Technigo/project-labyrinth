import React from "react";
import Lottie from "react-lottie";
import { useSelector } from "react-redux";
import animationData from '../animations/square.json'

export const LoadingIndicator = () => {
    const loading = useSelector((store) => store.ui.isLoading);
  
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
  
    return (
        <>
        {loading === true && 
        <div>
        <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
          />
        </div>
      }
      </>
    );
  };
  