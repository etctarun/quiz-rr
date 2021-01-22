import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Start from "./pages/Start/Start";
import Quiz from "./pages/Quiz/Quiz";
import Report from "./pages/Report/Report";

import { Provider } from "react-redux";
import configureStore from "./redux/store";
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/report" component={Report} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
