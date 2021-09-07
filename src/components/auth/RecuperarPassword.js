// Predefined packages
import React, { useState ,useContext} from 'react';
import AlertaContext from '../../context/alertas/alertaContext';
//hola esto es un comentarios para ver
// Custom packages
import { useForm } from '../../hooks/useForm';
import { regExpPassword, regExpEmail } from '../../utils/validator';

// Assets
import logoazul from '../../img/logoazul.png';

const RecuperarPassword = () => {


    //Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const [values, cambiarContrasenia] = useState({
        password: '',
        rpassword: '',
        email: '',
    });   
    const {email, password, rpassword } = values;
    const onChange = (e)=>{
        cambiarContrasenia({
            ...values,
            [e.target.name]:e.target.value
        })
    } 

    const onSubmit = (e) =>{
        e.preventDefault();
        
        if(password === '' || rpassword === ''|| email === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        console.log(password);
        //iniciarSesion({email, password});

    }
    return (
        <div className="contenedor__pass">
            <form className="rcontra" onSubmit={onSubmit}>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
                <img className="rcontra__logoazul" src={logoazul} alt="Logo Rostros" />
                <h3 className="centrar-texto">Recuperar Contraseña</h3>


                

                <div className="input">
                    <label className="label label--rcontra bold" htmlFor="email">Correo eléctronico</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        className="input-style input-style--rcontra"
                        onChange={onChange}
                    />
                     
                </div>
                <div className="input">
                    <label className="label label--rcontra bold" htmlFor="rcontra">Digite la nueva contraseña</label>
                    <input
                        id="rcontra"
                        type="password"
                        name="password"
                        value={password}
                        className="input-style input-style--rcontra"
                        onChange={onChange}
                    />
                    
                </div>

                <div className="input">
                    <label className="label label--rcontra bold" htmlFor="password">Digite nuevamente la contraseña</label>
                    <input
                        id="password"
                        type="password"
                        name="rpassword"
                        value={rpassword}
                        className="input-style input-style--rcontra"
                        onChange={onChange}
                    />
                    
                </div>

                <input type="submit" value="Actualizar" className="boton boton--primario centrar-bloque boton--rcontra" />
            </form>
        </div>
    );
}

export default RecuperarPassword;