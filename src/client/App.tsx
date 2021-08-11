import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProfileCreate from "./Pages/ProfileCreate";
import ProfileEdit from "./Pages/ProfileEdit";
import ProfilePreview from "./Pages/ProfilePreview";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Hub from "./Pages/Hub";
import Activities from "./Pages/Activities";
import Chat from "./Pages/Chat";

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path ="/">
            <HomePage />
          </Route>
          <Route exact path ="/create/:id">
            <ProfileCreate />
          </Route>
          <Route exact path ="/edit">
            <ProfileEdit />
          </Route>
          <Route exact path ="/profile/:id">
            <ProfilePreview />
          </Route>
          <Route exact path ="/login">
            <Login />
          </Route>
          <Route exact path ="/signup">
            <Signup />
          </Route>
          <Route exact path ="/hub">
            <Hub />
          </Route>
          <Route exact path ="/activities">
            <Activities />
          </Route>
          <Route exact path ="/chat">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

interface AppProps {}

export default App;
