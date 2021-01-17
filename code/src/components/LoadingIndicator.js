import React from "react";
import { useSelector } from "react-redux";
import { Loading } from "react-loading-dot";

export const LoadingIndicator = () => {
  const loading = useSelector((state) => state.ui.loading);
  return loading && <Loading background="#A69B8D" />;
};
