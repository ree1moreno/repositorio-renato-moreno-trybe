import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Config from './pages/config';
import Feedback from './pages/feedback';
import Game from './pages/game';
import Login from './pages/login';
import Notfound from './pages/notfound';
import Rank from './pages/rank';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/feedback" component={ Feedback } />
      <Route exact path="/rank" component={ Rank } />
      <Route exact path="/config" component={ Config } />
      <Route exact path="/*" component={ Notfound } />
    </Switch>
  );
}
