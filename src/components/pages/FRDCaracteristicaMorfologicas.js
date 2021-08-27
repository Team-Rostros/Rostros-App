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
        handleInputChange
}) => {

    return (
        <div id="cm" className="tabcontent">
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
                    >
                        <option>--Seleccione el craneo--</option>
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
                    >
                        <option>--Seleccione el rostro--</option>
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
                    >
                        <option>--Seleccione el cuello--</option>
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
                    >
                        <option>--Seleccione los ojos--</option>
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
                    >
                        <option>--Seleccione el cuerpo--</option>
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
                    >
                        <option>--Seleccione los labios--</option>
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
                    >
                        <option>--Seleccione las orejas--</option>
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
                    >
                        <option>--Seleccione la nariz--</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FRDCaracteristicaMorfologicas;