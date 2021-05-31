import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { store } from "./redux/store";

import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route component={NotFound} />
      </Switch>
    </Provider>
  );
}

export default App;
