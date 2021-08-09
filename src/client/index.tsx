import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


render(<App />, document.getElementById("root"));