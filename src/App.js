import React, { useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './pages/Login';

import './sass/App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Login} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
