import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
//Assets
import People from '../../img/people_search.png';

const Registro = () => {
    //State para registrase

    const [usuario, registrarUsuario] = useState({
        nombre:'',
        apellido:'',
        email:'',
        password:'',
        rpassword:'',
        pais:'',
        ciudad:'',
        tel:'',
        dni:'',
        ide:''

    });

    //Extrayendo el usuario

    const {nombre, apellido, email, password, rpassword, pais, ciudad, tel, dni, ide} = usuario;

    const onChange = (e)=>{
        registrarUsuario({
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
            <div className="layout__grid">
                <div className="grid__sidebar">
                    <div className="contenedor">
                        <h4 className="text-rostros">Rostros</h4>
                        <p className="cita__sidebar">Nunca dejaremos de preocuparnos por ti!</p>
                        <img className="foto__sidebar" src={People} alt="Foto persona con lupa" />
                    </div>
                </div>

                <div className="grid__formulario c_registro">
                    <div className="contenedor--form ">
                        <form
                            onSubmit={onSubmit}
                        >
                            <h1 className="no-margin centrar-texto myt-7">Registrarse en Rostros</h1>
                            <p className="centrar-texto bold">*Por favor complete el formulario*</p>
                            <div className="input-group">
                                <div className="input">
                                    <label className="label bold" htmlFor="nombre">Digite el nombre</label>
                                    <input 
                                        type="text"
                                        className="input-style"
                                        id="nombre"
                                        name="nombre"
                                        value={nombre}
                                        onChange={onChange}/>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="apellido">Digite el apellido</label>
                                    <input 
                                        type="text" 
                                        className="input-style" 
                                        id="apellido"
                                        name="apellido"
                                        value={apellido}
                                        onChange={onChange}/>
                                </div>
                            </div>

                            <div className="input">
                                <label className="label bold" htmlFor="email">Correo eléctronico</label>
                                <input 
                                    type="email"
                                    className="input-style input--alone"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}/>
                            </div>

                            <div className="input-group">
                                <div className="input">
                                    <label className="label bold" htmlFor="password">Digite la contraseña</label>
                                    <input 
                                        type="password"
                                        className="input-style"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={onChange}/>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="rpassword">Digite de nuevo la contraseña</label>
                                    <input 
                                        type="password"
                                        className="input-style"
                                        id="rpassword"
                                        name="rpassword"
                                        value={rpassword}
                                        onChange={onChange}/>
                                </div>
                            </div>
                            
                            <div className="input-group">
                                <div className="input">
                                    <label className="label bold" htmlFor="pais">País</label>
                                    <select 
                                        
                                        className="input-style"
                                        id="pais"
                                        name="pais"
                                        onChange={onChange}
                                        value={pais}>
                                        <option disabled>--Seleccione un pais--</option>
                                        <option value="Colombia">Colombia</option>
                                    </select>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="ciudad">Ciudad</label>
                                    <select 
                                        className="input-style"
                                        id="ciudad"
                                        name="ciudad"
                                        onChange={onChange}
                                        value={ciudad}>
                                        <option disabled>--Seleccione una ciudad--</option>
                                        <option value="Neiva">Neiva</option>
                                    </select>
                                </div>
                            </div>

                            <div className="input-group input-group--tres">
                                <div className="input">
                                    <label className="label bold" htmlFor="tel">Digite el teléfono</label>
                                    <input
                                        type="tel"
                                        className="input-style"
                                        id="tel"
                                        name="tel"
                                        onChange={onChange}
                                        value={tel}/>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="dni">Seleccione el tipo de DNI</label>
                                    <select 
                                        className="input-style"
                                        id="dni"
                                        name="dni"
                                        onChange={onChange}
                                        value={dni}>
                                        <option disabled>--Seleccione un dni--</option>
                                        <option value="CC">CC - Cédula de Ciudadanía</option>
                                        <option value="TI">TI - Tarjeta de identidad</option>
                                    </select>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="ide">Digite el no. de identificación</label>
                                    <input
                                        type="number"
                                        className="input-style"
                                        id="ide"
                                        name="ide"
                                        onChange={onChange}
                                        value={ide}/>
                                </div>
                            </div>

                            <div className="check">
                                <label className="check__terms" htmlFor="boxterm">Al hacer clic en <span className="check__textazul">"Registrarte"</span>, aceptas nuestras <span className="check__textazul">Condiciones,
                                    la Política de datos y la Política de cookies.</span></label>
                                <input 
                                    type="checkbox"
                                    id="boxterm"
                                    name="boxterm"/>
                            </div>

                            <div className="captcha">
                                <div className="g-recaptcha" data-sitekey="6Ld4COIaAAAAAKuRhDr3j6AaEPth0bjatnf6Rty_"></div>
                                <br/>
                                {/*<!--<input type="submit" value="Submit">-->*/}
                            </div>

                            <div className="grid__botones">
                                <input 
                                    type="submit"
                                    value="Registrarse"
                                    className="boton boton--primario" 
                                />
                                <Link to={'/login'} className="boton boton--secundario">
                                    Iniciar Sesión
                                </Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
                
            </div>
        </Fragment>
    );
}
 
export default Registro;