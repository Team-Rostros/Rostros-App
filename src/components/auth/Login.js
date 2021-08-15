import React, {Fragment} from 'react';

//Assets
import People from '../../img/people_search.png';

const Login = () => {

    const onChange = ()=>{

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
                        <form>
                            <h1 className="centrar-texto myt-7">Iniciar sesión en Rostros</h1>
                            
                            

                            <div className="input">
                                <label className="label bold" htmlFor="correo">Corrreo eléctronico</label>
                                <input 
                                    type="email"
                                    className="input-style input--alone" 
                                    id="correo"
                                    name="correo"
                                    onChange={onChange} />
                            </div>

                            <div className="input">
                                <label className="label bold" htmlFor="password">Digite la contraseña</label>
                                <input 
                                    type="password"
                                    className="input-style"
                                    id="password"
                                    name="password"
                                    onChange={onChange} />
                            </div>



                            <a className="enlace" href="rpassword.html">¿Olvidaste tu contraseña?</a>
                            <input 
                                type="submit"
                                value="Iniciar Sesión"
                                className="boton boton--primario centrar-bloque"
                            />
                            <a className="boton boton--secundario centrar-bloque" href="register.html">Registrarse</a>
                            
                        </form>
                    </div>
                </div>
                
            </div>
        </Fragment>
    );
}
 
export default Login;