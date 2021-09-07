// Predefined packages
import React from 'react';

// Custom packages

const FRDCaracteristicaMorfologicas = ({
    craneo,
    rostro,
    cuello,
    ojos,
    cuerpo,
    labios,
    oreja,
    nariz,
    handleInputChange,
    className
}) => {

    return (
        <div id="cm" className={`tabcontent ${className}`}>
            <h2 className="titulo__index titulo__index--fs3 centrar-texto">Características Morfológicas</h2>


            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="craneo">Craneo</label>
                    <select
                        type="text"
                        name="craneo"
                        id="craneo"
                        value={craneo}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione el craneo--</option>
                        <option value="Dolicocefalico" >Dolicocefalico</option>
                        <option value="Braquicefalo" >Braquicefalo</option>
                        <option value="Mesocefalo" >Mesocefalo</option>

                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="rostro">Rostro</label>
                    <select
                        type="text"
                        name="rostro"
                        id="rostro"
                        value={rostro}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione el rostro--</option>
                        <option value="Redondo">Redondo</option>
                        <option value="Ovalado">Ovalado</option>
                        <option value="Cuadrado">Cuadrado</option>
                        <option value="Rectangular">Rectangular</option>
                        <option value="Hexagonal">Hexagonal</option>
                        <option value="Triangular">Triangular</option>
                        <option value="Triangular invertido">Triangular invertido</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="cuello">Cuello</label>
                    <select
                        type="text"
                        name="cuello"
                        id="cuello"
                        value={cuello}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione el cuello--</option>
                        <option value="Largo">Largo</option>
                        <option value="Corto">Lorto</option>
                        <option value="Grueso">Grueso</option>
                        <option value="Delgado">Delgado</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="ojos">Ojos</label>
                    <select
                        type="text"
                        name="ojos"
                        id="ojos"
                        value={ojos}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione los ojos--</option>
                        <option value="Almendrados" >Almendrados</option>
                        <option value="Juntos" >Juntos</option>
                        <option value="Hundidos" >Hundidos</option>
                        <option value="Prominentes" >Prominentes</option>
                        <option value="Asiaticos" >Asiaticos</option>
                        <option value="Caidos" >Caidos</option>
                        <option value="Apartados" >Apartados</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="cuerpo">Cuerpo</label>
                    <select
                        type="text"
                        name="cuerpo"
                        id="cuerpo"
                        value={cuerpo}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione el cuerpo--</option>
                        <option value="Ectomorfo" >Ectomorfo</option>
                        <option value="Endomorfo" >Endomorfo</option>
                        <option value="Mesomorfo" >Mesomorfo</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="labios">Labios</label>
                    <select
                        type="text"
                        name="labios"
                        id="labios"
                        value={labios}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione los labios--</option>
                        <option value="Delgados" >Delgados</option>
                        <option value="Gruesos" >Gruesos</option>
                        <option value="Labio superior pronunciado" >Labio superior pronunciado</option>
                        <option value="Labio inferior diferente" >Labio inferior diferente</option>
                        <option value="En forma de arco" >En forma de arco</option>
                        <option value="Arco de cupido indefinido" >Arco de cupido indefinido</option>
                        <option value="Grosor medio" >Grosor medio</option>
                        <option value="Estirados o anchos" >Estirados o anchos</option>
                        <option value="Gruesos al centro" >Gruesos al centro</option>
                        <option value="Direccionados hacia abajo" >Direccionados hacia abajo</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="oreja">Orejas</label>
                    <select
                        type="text"
                        name="oreja"
                        id="oreja"
                        value={oreja}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione las orejas--</option>
                        <option value="Largas" >Largas</option>
                        <option value="Pequeñas" >Pequeñas</option>
                        <option value="Tamaño medio" >Tamaño medio</option>
                        <option value="Hacia afuera" >Hacia afuera</option>
                        <option value="En punta" >En punta</option>
                        <option value="Inclinadas" >Inclinadas</option>
                        <option value="Lobulos grandes" >Lobulos grandes</option>
                        <option value="Helice grande" >Helice grande</option>
                        <option value="Asa" >Asa</option>
                        <option value="Verticales" >Verticales</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="nariz">Nariz</label>
                    <select
                        type="text"
                        name="nariz"
                        id="nariz"
                        value={nariz}
                        className="input-style"
                        onChange={handleInputChange}
                        require
                    >
                        <option>--Seleccione la nariz--</option>
                        <option value="Aguileña">Aguileña</option>
                        <option value="Griega">Griega</option>
                        <option value="Nubia">Nubia</option>
                        <option value="Chata">Chata</option>
                        <option value="Respingada">Respingada</option>
                        <option value="Bulbosa">Bulbosa</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FRDCaracteristicaMorfologicas;