import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Register from './components/Register';
import Account from './components/Account';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="tests-management-application">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute>
              <Route path="/account" component={Account} />
            </ProtectedRoute>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
