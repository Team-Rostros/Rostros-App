// Predefined packages
import React from 'react';

// Custom packages

// Assets
import female from '../../img/female.png';

const FRDInformacionPersonal = ({
    file,
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
    handleInputChange,
    className
}) => {

    return (
        <div id="ip" className={`tabcontent ${className}`} >
            <h2 className="titulo__index titulo__index--fs3 centrar-texto">Información Personal</h2>
            <img className="tab__imagen" src={female} alt="Icono Foto" />
            <input
                ref={file}
                type="file"
                accept="image/png, image/jpeg"
                className="subir__btn"
            />


            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="nombre1">Primer nombre</label>
                    <input
                        type="text"
                        name="nombre1"
                        id="nombre1"
                        value={nombre1}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    />
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="apellido1">Primer apellido</label>
                    <input
                        type="text"
                        name="apellido1"
                        id="apellido1"
                        value={apellido1}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    />
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="nombre2">Segundo nombre</label>
                    <input
                        type="text"
                        name="nombre2"
                        id="nombre2"
                        value={nombre2}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    />
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="apellido2">Segundo apellido</label>
                    <input
                        type="text"
                        name="apellido2"
                        id="apellido2"
                        value={apellido2}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    />
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="genero">Género</label>
                    <select
                        type="text"
                        name="genero"
                        id="genero"
                        value={genero}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione el genero--</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                    <input
                        type="date"
                        name="fechaNacimiento"
                        id="fechaNacimiento"
                        value={fechaNacimiento}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    />
                </div>
            </div>

            <h3 className="centrar-texto titulo__index titulo__index--fs3">Ultima vez vista</h3>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="pais">Pais</label>
                    <select
                        type="text"
                        name="pais"
                        id="pais"
                        value={pais}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione el pais--</option>
                        <option value="Colombia" >Colombia</option>
                        <option value="Venezuela" >Venezuela</option>
                        <option value="Brasil" >Brasil</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="departamento">Departamento</label>
                    <select
                        type="text"
                        name="departamento"
                        id="departamento"
                        value={departamento}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione el departamento--</option>
                        <option value="Huila">Huila</option>
                        <option value="Cundinamarca">Cundinamarca</option>
                        <option value="Antioquia">Antioquia</option>
                    </select>
                </div>
            </div>

            <div className="input-group input-group--tres">
                <div className="input">
                    <label className="label bold" htmlFor="ciudad">Ciudad</label>
                    <select
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        value={ciudad}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione la ciudad--</option>
                        <option value="Neiva">Neiva </option>
                        <option value="Bogotá">Bogotá</option>
                        <option value="Medellín">Medellín</option>
                        <option value="Rivera">Rivera</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="zipcode">Zip Code</label>
                    <input
                        type="number"
                        name="zipcode"
                        id="zipcode"
                        value={zipcode}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    />
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="fechad">Fecha</label>
                    <input
                        type="date"
                        name="fechad"
                        id="fechad"
                        value={fechad}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    />
                </div>
            </div>
        </div>
    );
}

export default FRDInformacionPersonal;