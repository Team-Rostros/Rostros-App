import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';
//Assets
import People from '../../img/people_search.png';

const Login = (props) => {

    //Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //Extraer los valores del context
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado, usuario: usr, mensaje, autenticado, iniciarSesion } = authContext;

    //En caso de que el password o usuario no exista
    const cargarYDeterminarUsuario = async () => {
        await usuarioAutenticado();
        if (usr !== null) {
            if (usr.is_admin) props.history.replace('/admin');
            else props.history.replace('/panel-usuario');
        }
    }
    useEffect(() => {
        if (autenticado) {
            cargarYDeterminarUsuario();
        }

        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history, usr]);

    //State para iniciar sesión

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    //Extrayendo el usuario

    const { email, password } = usuario;



    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario inicie sesion

    const onSubmit = (e) => {
        e.preventDefault();

        //Validar que no haya campos vacios
        if (email === '' || password === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        //Pasarlo a la accion
        iniciarSesion({ email, password });

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
                        {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
                        <form
                            onSubmit={onSubmit}
                        >
                            <h1 className="centrar-texto myt-7">Iniciar sesión en Rostros</h1>



                            <div className="input">
                                <label className="label bold" htmlFor="email">Correo eléctronico</label>
                                <input
                                    type="email"
                                    className="input-style input--alone"
                                    id="email"
                                    name="email"
                                    value={email}
                                    data-cy="usuario-input"
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
                                    data-cy="contra-input"
                                    onChange={onChange} />
                            </div>


                            <Link to={'/rpassword'} className="enlace">
                                ¿Olvidaste tu contraseña?
                            </Link>

                            <input
                                type="submit"
                                value="Iniciar Sesión"
                                data-cy="submit-input"
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