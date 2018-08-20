import React from 'react';
import { hot } from 'react-hot-loader';

import {
  Route,
  Switch, Redirect,
} from 'react-router-dom';
import './App.scss';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';


const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);

export default hot(module)(App);
