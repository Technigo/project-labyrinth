import React from "react";
import { Provider } from "react-redux";
import Start from "./components/Start";

const App = () => {
  return (
    <Provider store={store}>
      <Start />
    </Provider>
  );
};

export default App;
