import React, {Fragment, useState, useRef, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';
//Assets
import People from '../../img/people_search.png';
import axios from 'axios';

const Registro = (props) => {
    //Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //Extraer los valores del context
    const authContext = useContext(AuthContext);
    const{mensaje, autenticado, registrarUsuario} = authContext;
    
    //En caso de que el usuario este
    //Autenticado / Registrado

    useEffect(()=>{
        if(autenticado){
            props.history.push('/panel-usuario');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history]);
    
    //State para registrase

    const [usuario, guardarUsuario] = useState({
        nombre:'',
        apellido:'',
        email:'',
        password:'',
        rpassword:'',
        pais:'',
        departamento:'',
        ciudad:'',
        tel:'',
        dni:'',
        ide:''
    });

    //Extrayendo el usuario

    const {nombre, apellido, email, password, rpassword, pais, departamento, ciudad, tel, dni, ide} = usuario;

    const onChange = (e)=>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    //Recaptcha

    const captcha = useRef(null);

    const onRecaptcha = () =>{
        if(captcha.current.getValue()){
            //console.log('El usuario no es un robot');
        }
    }

    //Cuando el usuario inicie sesion

    const onSubmit = (e) =>{
        e.preventDefault();

        //Validar que no haya campos vacios
        if(nombre.trim === '' || apellido.trim === '' || email.trim === '' || password.trim === '' || rpassword.trim === '' || pais.trim === '' || departamento.trim === '' || ciudad.trim === '' || tel.trim === '' || dni.trim === '' || ide.trim === '' ){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        //Contraseña minima de 6 caracteres
        if(password.length < 6){
            mostrarAlerta('La contraseña debe tener minimo 6 caracteres', 'alerta-error');
            return;
        }


        //Revisar que los dos passwords sean iguales
        if(password !== rpassword){
            mostrarAlerta('La contraseñas no son iguales', 'alerta-error');
            return;
        }
        
        //Pasarlo a la accion

        

        registrarUsuario({
            nombre,
            apellido,
            email,
            password,
            pais,
            departamento,
            ciudad,
            tel,
            dni,
            ide
        }).toString();

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
                            
                            <div className="input-group input-group--tres">
                                <div className="input">
                                    <label className="label bold" htmlFor="pais">País</label>
                                    <select 
                                        
                                        className="input-style"
                                        id="pais"
                                        name="pais"
                                        value={pais}
                                        onChange={onChange}>
                                        <option>--Seleccione un pais--</option>
                                        <option value="Colombia">Colombia</option>
                                    </select>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="departamento">Departamento</label>
                                    <select 
                                        className="input-style"
                                        id="departamento"
                                        name="departamento"
                                        value={departamento}
                                        onChange={onChange}>
                                        <option>--Seleccione una departamento--</option>
                                        <option value="Huila">Huila</option>
                                    </select>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="ciudad">Ciudad</label>
                                    <select 
                                        className="input-style"
                                        id="ciudad"
                                        name="ciudad"
                                        value={ciudad}
                                        onChange={onChange}>
                                        <option>--Seleccione una ciudad--</option>
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
                                        value={tel}
                                        onChange={onChange}
                                        required/>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="dni">Seleccione el tipo de DNI</label>
                                    <select 
                                        className="input-style"
                                        id="dni"
                                        name="dni"
                                        value={dni}
                                        onChange={onChange}>
                                        <option>--Seleccione un dni--</option>
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
                                        value={ide}
                                        onChange={onChange}
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