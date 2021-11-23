import React from "react";
import { useSelector } from "react-redux";
import { ui } from "../reducers/ui";
import styled from "styled-components";

export const Loader = () => {
  const loading = useSelector((store) => store.ui.loading);

  return <div>{loading && <p>Loading...</p>}</div>;
};
