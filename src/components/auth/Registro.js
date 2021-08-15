import React, {Fragment} from 'react';

//Assets
import People from '../../img/people_search.png';

const Registro = () => {
    return (
        <Fragment>
            <div className="layout__grid">
                <div className="grid__sidebar">
                    <div className="contenedor">
                        <h4 className="text-rostros">Rostros</h4>
                        <p className="cita__sidebar">Nunca dejaremos de preocuparnos por ti!</p>
                        <img className="foto__sidebar" src={People} alt="Foto persona con lupa" />
                    </div>
                </div>

                <div className="grid__formulario">
                    <div className="contenedor--form">
                        <form>
                            <h1 className="no-margin centrar-texto myt-7">Registrarse en Rostros</h1>
                            <p className="centrar-texto bold">*Por favor complete el formulario*</p>
                            <div className="input-group">
                                <div className="input">
                                    <label className="label bold" htmlFor="nombre">Digite el nombre</label>
                                    <input type="text" className="input-style" id="nombre" />
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="apellido">Digite el apellido</label>
                                    <input type="text" className="input-style" id="apellido" />
                                </div>
                            </div>

                            <div className="input">
                                <label className="label bold" htmlFor="correo">Corrreo eléctronico</label>
                                <input type="email" className="input-style input--alone" id="correo" />
                            </div>

                            <div className="input-group">
                                <div className="input">
                                    <label className="label bold" htmlFor="password">Digite la contraseña</label>
                                    <input type="password" className="input-style" id="password" />
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="rpassword">Digite de nuevo la contraseña</label>
                                    <input type="password" className="input-style" id="rpassword" />
                                </div>
                            </div>
                            
                            <div className="input-group">
                                <div className="input">
                                    <label className="label bold" htmlFor="pais">País</label>
                                    <select type="password" className="input-style" id="pais">
                                        <option>--Seleccione un pais--</option>
                                    </select>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="ciudad">Ciudad</label>
                                    <select  className="input-style" id="ciudad">
                                        <option>--Seleccione una ciudad--</option>
                                    </select>
                                </div>
                            </div>

                            <div className="input-group input-group--tres">
                                <div className="input">
                                    <label className="label bold" htmlFor="tel">Digite el teléfono</label>
                                    <input type="tel" className="input-style" id="tel" />
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="dni">Seleccione el tipo de DNI</label>
                                    <select  className="input-style" id="dni">
                                        <option>--Seleccione un dni--</option>
                                    </select>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="ide">Digite el no. de identificación</label>
                                    <input type="number" className="input-style" id="ide" />
                                </div>
                            </div>

                            <div className="check">
                                <label className="check__terms" htmlFor="boxterm">Al hacer clic en <span className="check__textazul">"Registrarte"</span>, aceptas nuestras <span className="check__textazul">Condiciones,
                                    la Política de datos y la Política de cookies.</span></label>
                                <input type="checkbox" id="boxterm" />
                            </div>

                            <div className="captcha">
                                <div className="g-recaptcha" data-sitekey="6Ld4COIaAAAAAKuRhDr3j6AaEPth0bjatnf6Rty_"></div>
                                <br/>
                                {/*<!--<input type="submit" value="Submit">-->*/}
                            </div>

                            <div className="grid__botones">
                                <input type="submit" value="Registrarse" className="boton boton--primario" />
                                <a className="boton boton--secundario" href="#">Iniciar Sesión</a>
                            </div>
                            
                        </form>
                    </div>
                </div>
                
            </div>
        </Fragment>
    );
}
 
export default Registro;