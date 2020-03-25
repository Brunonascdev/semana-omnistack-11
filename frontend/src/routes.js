import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon/Logon";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import NewIncident from "./pages/NewIncident/NewIncident";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Logon} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </Router>
  );
};
