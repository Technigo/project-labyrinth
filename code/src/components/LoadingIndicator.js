import React from "react";
import { useSelector } from "react-redux";

export const LoadingIndicator = () => {
    const loading = useSelector((store) => store.ui.loading);
  
  
    return (
      <>
        {loading && <p>Is Loading</p>}
      </>
    );
  };
  