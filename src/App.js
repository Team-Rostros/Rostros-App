// Predefined packages
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Custom packages
import Login from './components/auth/Login';
import RecuperarPassword from './components/auth/RecuperarPassword';
import Registro from './components/auth/Registro';
import Index from './components/Index';
import AnatomiaDelDesaparecido from './components/pages/AnatomiaDelDesaparecido';
import Anatomias from './components/pages/Anatomias';
import CentroAyuda from './components/pages/CentroAyuda';
import Donaciones from './components/pages/Donaciones';
import Error404 from './components/pages/Error404';
import Maintenance from './components/pages/Maintenance';
import Panel from './components/pages/Panel';
import PanelUsuario from './components/pages/PanelUsuario';
import Terminos from './components/pages/Terminos';
import VerDesaparecidos from './components/pages/VerDesaparecidos';

import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';

function App() {
  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/rpassword" component={RecuperarPassword} />
            <Route exact path="/nueva-cuenta" component={Registro} />
            <Route exact path="/terminos" component={Terminos} />
            <Route exact path="/donaciones" component={Donaciones} />
            <Route exact path="/anatomia-del-desaparecido" component={AnatomiaDelDesaparecido} />
            <Route exact path="/anatomias" component={Anatomias} />
            
            <Route exact path="/panel" component={Panel} />

            <Route exact path="/panel-usuario" component={PanelUsuario} />

            <Route exact path="/centro-ayuda" component={CentroAyuda} />
            <Route exact path="/maintenance" component={Maintenance} />
            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
