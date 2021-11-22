import React from "react";
import { useSelector } from "react-redux";
import { ui } from "reducers/ui";

export const Loading = () => {
  const loading = useSelector((store) => store.ui.loading);

  return <div>{loading && <p>Loading....</p>}</div>;
};
