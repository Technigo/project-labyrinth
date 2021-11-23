import React from "react";
import Lottie from "react-lottie";

import { useSelector } from "react-redux";

export const LoadingIndicator = () => {
  const loading = useSelector((state) => state.ui.isLoading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
  };

return (
  <> 
  {loading && 
      <div>
        <h1>Loading...</h1>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
  }
  </>
);
};