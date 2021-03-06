import React, {Fragment, useState, useRef, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';
import { useForm } from "react-hook-form";

//Assets
import People from '../../img/people_search.png';


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
        }else{
            alert('Por favor marque el recaptcha');
        }
    }

    //Cuando el usuario inicie sesion

    //Validacion

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (e) =>{
        //e.preventDefault();

        //Validar que no haya campos vacios
        if(nombre.trim === '' || apellido.trim === '' || email.trim === '' || password.trim === '' || rpassword.trim === '' || tel.trim === '' || ide.trim === '' ){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        //Contrase??a minima de 6 caracteres
        if(password.length < 6){
            mostrarAlerta('La contrase??a debe tener minimo 6 caracteres', 'alerta-error');
            return;
        }

        //Revisar que los dos passwords sean iguales
        if(password !== rpassword){
            mostrarAlerta('La contrase??as no son iguales', 'alerta-error');
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
                            onSubmit={handleSubmit(onSubmit)}
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
                                        data-cy="nombre-input"
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
                                        data-cy="apellido-input"
                                        required/>
                                </div>
                            </div>

                            <div className="input">
                                <label className="label bold" htmlFor="email">Correo el??ctronico</label>
                                <input 
                                    type="email"
                                    className="input-style input--alone"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    data-cy="correo-input"
                                    required/>
                            </div>

                            <div className="input-group">
                                <div className="input">
                                    <label className="label bold" htmlFor="password">Digite la contrase??a</label>
                                    <input 
                                        type="password"
                                        className="input-style"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                        data-cy="contra-input"
                                        required/>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="rpassword">Digite de nuevo la contrase??a</label>
                                    <input 
                                        type="password"
                                        className="input-style"
                                        id="rpassword"
                                        name="rpassword"
                                        value={rpassword}
                                        onChange={onChange}
                                        data-cy="rcontra-input"
                                        required/>
                                </div>
                            </div>
                            
                            <div className="input-group input-group--tres">
                                <div className="input">
                                    <label className="label bold" htmlFor="pais">Pa??s</label>
                                    <select {...register("pais", { required: true })} 
                                        className="input-style"
                                        id="pais"
                                        name="pais"
                                        value={pais}
                                        data-cy="pais-input"
                                        onChange={onChange}>
                                        <option value="">--Seleccione un pais--</option>
                                        <option value="Colombia">Colombia</option>
                                    </select>
                                    {errors.pais && "Este campo es requerido"}
                                    
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="departamento">Departamento</label>
                                    <select {...register("departamento", { required: true })}
                                        className="input-style"
                                        id="departamento"
                                        name="departamento"
                                        value={departamento}
                                        data-cy="departamento-input"
                                        onChange={onChange}>
                                        <option value="">--Seleccione una departamento--</option>
                                        <option value="Huila">Huila</option>
                                    </select>
                                    {errors.departamento && "Este campo es requerido"}
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="ciudad">Ciudad</label>
                                    <select {...register("ciudad", { required: true })}
                                        className="input-style"
                                        id="ciudad"
                                        name="ciudad"
                                        value={ciudad}
                                        data-cy="ciudad-input"
                                        onChange={onChange}>
                                        <option value="">--Seleccione un municipio--</option>
                                        <option value="Acevedo">Acevedo</option>
                                        <option value="Algeciras">Algeciras</option>
                                        <option value="Altamira">Altamira</option>
                                        <option value="Baraya">Baraya</option>
                                        <option value="Campoalegre">Campoalegre</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Elias">Elias</option>
                                        <option value="El Agrado">El Agrado</option>
                                        <option value="Garz??n">Garz??n</option>
                                        <option value="Gigante">Gigante</option>
                                        <option value="Guadalupe">Guadalupe</option>
                                        <option value="Hobo">Hobo</option>
                                        <option value="??quira">??quira</option>
                                        <option value="Isnos">Isnos</option>
                                        <option value="La Argentina">La Argentina</option>
                                        <option value="La Plata">La Plata</option>
                                        <option value="N??taga">N??taga</option>
                                        <option value="Neiva">Neiva</option>
                                        <option value="Oporapa">Oporapa</option>
                                        <option value="Paicol">Paicol</option>
                                        <option value="Palermo">Palermo</option>
                                        <option value="Palestina">Palestina</option>
                                        <option value="Pital">Pital</option>
                                        <option value="Pitalito">Pitalito</option>
                                        <option value="Rivera">Rivera</option>
                                        <option value="Saladoblanco">Saladoblanco</option>
                                        <option value="Santa Mar??a">Santa Mar??a</option>
                                        <option value="San Agust??n">San Agust??n</option>
                                        <option value="Suaza">Suaza</option>
                                        <option value="Tarqu??">Tarqu??</option>
                                        <option value="Tello">Tello</option>
                                        <option value="Teruel">Teruel</option>
                                        <option value="Tesalia">Tesalia</option>
                                        <option value="Timan??">Timan??</option>
                                        <option value="Villavieja">Villavieja</option>
                                    </select>
                                    {errors.ciudad && "Este campo es requerido"}
                                </div>
                            </div>

                            <div className="input-group input-group--tres">
                                <div className="input">
                                    <label className="label bold" htmlFor="tel">Digite el tel??fono</label>
                                    <input
                                        type="number"
                                        className="input-style"
                                        id="tel"
                                        name="tel"
                                        value={tel}
                                        data-cy="telefono-input"
                                        onChange={onChange}
                                        required/>
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="dni">Seleccione el tipo de DNI</label>
                                    <select {...register("dni", { required: true })}
                                        className="input-style"
                                        id="dni"
                                        name="dni"
                                        value={dni}
                                        data-cy="tdni-input"
                                        onChange={onChange}
                                        required>
                                        <option value="">--Seleccione un dni--</option>
                                        <option value="CC">CC</option>
                                        <option value="TI">TI</option>
                                    </select>
                                    {errors.dni && "Este campo es requerido"}
                                </div>

                                <div className="input">
                                    <label className="label bold" htmlFor="ide">Digite el no. de identificaci??n</label>
                                    <input
                                        type="number"
                                        className="input-style"
                                        id="ide"
                                        name="ide"
                                        value={ide}
                                        data-cy="dni-input"
                                        onChange={onChange}
                                        required/>
                                </div>
                            </div>

                            <div className="check">
                                <label  className="check__terms" htmlFor="boxterm">Al hacer clic en <span className="check__textazul">"Registrarte"</span>, aceptas nuestras <span className="check__textazul"><Link to="/terminos" target="_blank">Condiciones,
                                    la Pol??tica de datos y la Pol??tica de cookies.</Link></span></label>
                                <input {...register("boxterm", { required: true })}
                                    type="checkbox"
                                    id="boxterm"
                                    data-cy="check-input"
                                    name="boxterm"/>
                                {errors.boxterm && alert('Los terminos y condiciones son requeridos')}    
                            </div>

                           <div className="recaptcha">
                            {/* <ReCAPTCHA
                                    ref={captcha}
                                    sitekey="6LeDTg0cAAAAAId_gOEk7lQhrO5zJR8dxPlnX1pg"
                                    onChange={onRecaptcha}
                                /> */}
                           </div>

                            

                            <div className="grid__botones">
                                <input 
                                    type="submit"
                                    value="Registrarse"
                                    data-cy="submit-input"
                                    className="boton boton--primario" 
                                />
                                <Link to={'/login'} className="boton boton--secundario">
                                    Iniciar Sesi??n
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