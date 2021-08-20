// Predefined packages
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Custom packages
import Login from './components/auth/Login';
import RecuperarPassword from './components/auth/RecuperarPassword';
import Registro from './components/auth/Registro';
import Index from './components/Index';
import Anatomias from './components/pages/Anatomias';
import CentroAyuda from './components/pages/CentroAyuda';
import Donaciones from './components/pages/Donaciones';
import Error404 from './components/pages/Error404';
import Terminos from './components/pages/Terminos';
import VerDesaparecidos from './components/pages/VerDesaparecidos';

import AlertaState from './context/alertas/alertaState';

function App() {
  return (
    <AlertaState>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/rpassword" component={RecuperarPassword} />
          <Route exact path="/nueva-cuenta" component={Registro} />
          <Route exact path="/terminos" component={Terminos} />
          <Route exact path="/donaciones" component={Donaciones} />
          <Route exact path="/anatomias" component={Anatomias} />
          <Route exact path="/centro-ayuda" component={CentroAyuda} />
          <Route exact path="/ver-desaparecidos" component={VerDesaparecidos} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </AlertaState>
  );
}

export default App;
