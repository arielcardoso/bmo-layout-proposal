import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './pages/layout/Header';
import Sidebar from './pages/layout/Sidebar';

import Login from './pages/Login';
import Home from './pages/Home';
import PaymentsAndTransfers from './pages/PaymentsAndTransfers';
import Checking from './pages/Checking';
import Savings from './pages/Savings';

import './sass/App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Login} ></Route>
        <Route path="/admin/" >
          <div className='ui'>
            <Sidebar />
            <div className='ui-content' >
              <Header />
              <div className='p-4' >
                <Switch>
                  <Route path="/admin/" exact={true} component={Home} />
                  <Route path="/admin/checking" exact={true} component={Checking} />
                  <Route path="/admin/savings" exact={true} component={Savings} />
                  <Route path="/admin/make-payments-and-transfers" exact={true} component={PaymentsAndTransfers} />
                </Switch>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
