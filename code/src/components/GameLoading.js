import React from "react";
import { useSelector } from "react-redux";
import { CubeSpinner } from "react-spinners-kit";


export const GameLoading = () => {
  const loading = useSelector((state) => state.ui.loading);

  return loading === true && <CubeSpinner />;
};
