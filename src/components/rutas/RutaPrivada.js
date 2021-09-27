import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router';
import AuthContext from '../../context/autenticacion/authContext';

//SweetAlert

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const RutaPrivada = ({component: Component, ...props}) => {
    
    const authContext = useContext(AuthContext);
    const {autenticado, cargando, usuarioAutenticado} = authContext;

    useEffect(()=>{
        usuarioAutenticado();
    }, [])

    return (
        <Route {...props} render={props => !autenticado && !cargando ? (
            
            <Redirect to="/login" />
        ): (
            <Component {...props} />
        )} />
    );
}
 
export default RutaPrivada;