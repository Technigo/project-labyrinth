import React from 'react'
import { useSelector } from 'react-redux'


export const LoadingPage = () => {
  const isLoading = useSelector((store) => store.loader.isLoading);
  console.log("Inside Loadingpage.js, isLoading is: " + isLoading)

  return (
      isLoading && <div>"Finding path"</div>
  );
};