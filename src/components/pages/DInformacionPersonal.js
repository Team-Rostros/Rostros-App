import React from 'react';
import { extraerFecha } from '../../utils/convertidor';

// Assets
import male from '../../img/male.jpg';

const DInformacionPersonal = ({
    id,
    nombre1,
    apellido1,
    nombre2,
    apellido2,
    genero,
    fechaNacimiento,
    pais,
    departamento,
    ciudad,
    zipcode,
    fechad,
    className
}) => {

    return (
        <div className={`tabcontent ${className}`}>
            <h2 className="titulo__index titulo__index--fs3 centrar-texto">Información Personal</h2>
            <img className="tab__imagen" src={`http://localhost:4000/api/desaparecido/photo/${id}`} alt="Icono Foto" />

            <form className="grid__form container--80rem">
                <div className="input-group">
                    <div className="input">
                        <label className="label bold centrar-texto" htmlFor="pnombre">Primer nombre</label>
                        <p className="centrar-texto">{nombre1}</p>
                    </div>

                    <div className="input">
                        <label className="label bold centrar-texto" htmlFor="papellido">Primer apellido</label>
                        <p className="centrar-texto">{apellido1}</p>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input">
                        <label className="label bold centrar-texto" htmlFor="snombre">Segundo nombre</label>
                        <p className="centrar-texto">{nombre2}</p>
                    </div>

                    <div className="input">
                        <label className="label bold centrar-texto" htmlFor="sapellido">Segundo apellido</label>
                        <p className="centrar-texto">{apellido2}</p>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input">
                        <label className="label bold centrar-texto" htmlFor="nombre">Género</label>
                        <p className="centrar-texto">{genero}</p>
                    </div>

                    <div className="input">
                        <label className="label bold centrar-texto" htmlFor="apellido">Fecha de nacimiento</label>
                        <p className="centrar-texto">{extraerFecha(fechaNacimiento)}</p>
                    </div>
                </div>

                <h3 className="centrar-texto titulo__index titulo__index--fs3">Ultima vez vista</h3>

                <div className="input-group">
                    <div className="input">
                        <label className="label bold centrar-texto" htmlFor="pais">Pais</label>
                        <p className="centrar-texto">{pais}</p>
                    </div>

                    <div className="input">
                        <label className="label bold centrar-texto" htmlFor="depart">Departamento</label>
                        <p className="centrar-texto">{departamento}</p>
                    </div>
                </div>

                <div className="input-group input-group--tres">
                    <div className="input">
                        <label className="label bold centrar-texto" htmlFor="ciudad">Ciudad</label>
                        <p className="centrar-texto">{ciudad}</p>
                    </div>

                    <div className="input">
                        <label className="label bold centrar-texto" htmlFor="zipcode">Zip Code</label>
                        <p className="centrar-texto">{zipcode}</p>
                    </div>

                    <div className="input">
                        <label className="label bold centrar-texto" htmlFor="fechad">Fecha</label>
                        <p className="centrar-texto">{extraerFecha(fechad)}</p>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default DInformacionPersonal;