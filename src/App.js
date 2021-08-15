import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Registro from './components/auth/Registro';
import Index from './components/Index';
import Error404 from './components/pages/Error404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/nueva-cuenta" component={Registro} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
