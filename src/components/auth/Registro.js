import React, {Fragment, useState, useRef, useContext} from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import AlertaContext from '../../context/alertas/alertaContext';
//Assets
import People from '../../img/people_search.png';

const Registro = () => {
    //Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;
    
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

    const {nombre, apellido, email, password, rpassword, pais, ciudad, tel, dni, ide, boxterm} = usuario;

    const onChange = (e)=>{
        registrarUsuario({
            ...usuario,
            [e.target.name]:[e.target.value]
        })
    }

    //Recaptcha

    const captcha = useRef(null);

    const onRecaptcha = () =>{
        if(captcha.current.getValue()){
            console.log('El usuario no es un robot');
        }
    }

    //Cuando el usuario inicie sesion

    const onSubmit = (e) =>{
        e.preventDefault();

        //Validar que no haya campos vacios
        if(nombre.trim === '' || apellido.trim === '' || email.trim === '' || password.trim === '' || rpassword.trim === '' || pais.trim === '' || ciudad.trim === '' || tel.trim === '' || dni.trim === '' || ide.trim === '' ){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        //Contraseña minima de 6 caracteres
        if(password.[0].length < 6){
            console.log(password.[0].length);
            mostrarAlerta('La contraseña debe tener minimo 6 caracteres', 'alerta-error');
            return;
        }


        //Revisar que los dos passwords sean iguales
        if(password.[0] !== rpassword.[0]){
            mostrarAlerta('La contraseñas no son iguales', 'alerta-error');
            return;
        }

        //Validar que se activo el checkbox
        

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
                        {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
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
                                        onChange={onChange}
                                        required/>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="apellido">Digite el apellido</label>
                                    <input 
                                        type="text" 
                                        className="input-style" 
                                        id="apellido"
                                        name="apellido"
                                        value={apellido}
                                        onChange={onChange}
                                        required/>
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
                                    onChange={onChange}
                                    required/>
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
                                        onChange={onChange}
                                        required/>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="rpassword">Digite de nuevo la contraseña</label>
                                    <input 
                                        type="password"
                                        className="input-style"
                                        id="rpassword"
                                        name="rpassword"
                                        value={rpassword}
                                        onChange={onChange}
                                        required/>
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
                                        value={tel}
                                        required/>
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
                                        value={ide}
                                        required/>
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

                           <div className="recaptcha">
                            <ReCAPTCHA
                                    ref={captcha}
                                    sitekey="6LeDTg0cAAAAAId_gOEk7lQhrO5zJR8dxPlnX1pg"
                                    onChange={onRecaptcha}
                                />
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