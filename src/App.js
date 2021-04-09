import React, { useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './pages/layout/Header';
import Sidebar from './pages/layout/Sidebar';

import Login from './pages/Login';
import Home from './pages/Home';
import PaymentsAndTransfers from './pages/PaymentsAndTransfers';

import './sass/App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Login} ></Route>
        <Route path="/admin/" >
          <Header />
          <div class='ui-content'>
            <Sidebar />
              <main>
              <Switch>
                <Route path="/admin/" exact={true} component={Home} />
                <Route path="/admin/payments-and-transfers" exact={true} component={PaymentsAndTransfers} />
              </Switch>
            </main>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
