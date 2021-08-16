import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
//Assets
import People from '../../img/people_search.png';

const Login = () => {

    //State para iniciar sesión

    const [usuario, guardarUsuario] = useState({
        email:'',
        password: ''
    });

    //Extrayendo el usuario

    const {email, password} = usuario;

    const onChange = (e)=>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:[e.target.value]
        })
    }

    //Cuando el usuario inicie sesion

    const onSubmit = (e) =>{
        e.preventDefault();

        //Validar que no haya campos vacios

        //Pasarlo a la accion


    }
    return (
        <Fragment>
            <div className="layout__grid layout__grid--login">
                <div className="grid__sidebar grid__sidebar--login">
                    <div className="contenedor">
                        <h4 className="text-rostros">Rostros</h4>
                        <p className="cita__sidebar">Nunca dejaremos de preocuparnos por ti!</p>
                        <img className="foto__sidebar" src={People} alt="Foto persona con lupa" />
                    </div>
                </div>

                <div className="grid__formulario grid__formulario--login">
                    <div className="contenedor--form formulario">
                        <form
                            onSubmit={onSubmit}
                        >
                            <h1 className="centrar-texto myt-7">Iniciar sesión en Rostros</h1>
                            
                            

                            <div className="input">
                                <label className="label bold" htmlFor="email">Corrreo eléctronico</label>
                                <input 
                                    type="email"
                                    className="input-style input--alone" 
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange} />
                            </div>

                            <div className="input">
                                <label className="label bold" htmlFor="password">Digite la contraseña</label>
                                <input 
                                    type="password"
                                    className="input-style"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange} />
                            </div>


                            
                            <a className="enlace" href="rpassword.html">¿Olvidaste tu contraseña?</a>
                            <input 
                                type="submit"
                                value="Iniciar Sesión"
                                className="boton boton--primario centrar-bloque"
                            />
                            <Link to={'/nueva-cuenta'} className="boton boton--secundario centrar-bloque">
                                Registrarse
                            </Link>
                            
                            
                        </form>
                    </div>
                </div>
                
            </div>
        </Fragment>
    );
}
 
export default Login;