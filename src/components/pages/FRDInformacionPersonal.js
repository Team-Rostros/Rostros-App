// Predefined packages
import React from 'react';

// Custom packages

// Assets
import female from '../../img/female.png';

const FRDInformacionPersonal = ({
    file,
    desaparecido,
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
            <img className="tab__imagen" src={desaparecido?`http://localhost:4000/api/desaparecido/photo/${desaparecido._id}`:female} alt="Icono Foto" />
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
                        
                    >
                        <option>--Seleccione el pais--</option>
                        <option value="Colombia" >Colombia</option>
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
                        
                    >
                        <option>--Seleccione el departamento--</option>
                        <option value="Huila">Huila</option>
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
                        
                    >
                        <option>--Seleccione un municipio--</option>
                        <option value="Acevedo">Acevedo</option>
                        <option value="Algeciras">Algeciras</option>
                        <option value="Altamira">Altamira</option>
                        <option value="Baraya">Baraya</option>
                        <option value="Campoalegre">Campoalegre</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Elias">Elias</option>
                        <option value="El Agrado">El Agrado</option>
                        <option value="Garzón">Garzón</option>
                        <option value="Gigante">Gigante</option>
                        <option value="Guadalupe">Guadalupe</option>
                        <option value="Hobo">Hobo</option>
                        <option value="Íquira">Íquira</option>
                        <option value="Isnos">Isnos</option>
                        <option value="La Argentina">La Argentina</option>
                        <option value="La Plata">La Plata</option>
                        <option value="Nátaga">Nátaga</option>
                        <option value="Neiva">Neiva</option>
                        <option value="Oporapa">Oporapa</option>
                        <option value="Paicol">Paicol</option>
                        <option value="Palermo">Palermo</option>
                        <option value="Palestina">Palestina</option>
                        <option value="Pital">Pital</option>
                        <option value="Pitalito">Pitalito</option>
                        <option value="Rivera">Rivera</option>
                        <option value="Saladoblanco">Saladoblanco</option>
                        <option value="Santa María">Santa María</option>
                        <option value="San Agustín">San Agustín</option>
                        <option value="Suaza">Suaza</option>
                        <option value="Tarquí">Tarquí</option>
                        <option value="Tello">Tello</option>
                        <option value="Teruel">Teruel</option>
                        <option value="Tesalia">Tesalia</option>
                        <option value="Timaná">Timaná</option>
                        <option value="Villavieja">Villavieja</option>
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
                        
                    />
                </div>
            </div>
        </div>
    );
}

export default FRDInformacionPersonal;