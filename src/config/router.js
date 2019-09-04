import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Home from "../molecules/Home";
import Test from "../molecules/test";
import MicPage from "../molecules/MicPage";

class Routes extends React.Component {
  render() {
    return (
      <Router basename="/">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/open-mics" exact component={Test}/>
          <Route path="/open-mic/:id" exact component={MicPage}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;