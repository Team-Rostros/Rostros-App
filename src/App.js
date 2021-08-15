import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Registro from './components/auth/Registro';
import Index from './components/Index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/nueva-cuenta" component={Registro} />
      </Switch>
    </Router>
  );
}

export default App;
