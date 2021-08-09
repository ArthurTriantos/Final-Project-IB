import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProfileEdit from "./Pages/ProfileEdit";
import Profile from "./Pages/Profile";


/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path = "/">
            <HomePage />
          </Route>
          <Route exact path = "/edit">
            <ProfileEdit />
          </Route>
          <Route exact path = "/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

interface AppProps {}

export default App;
