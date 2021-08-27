// Predefined packages
import React from 'react';

// Custom packages

const FRDCaracteristicasFisicas = ({
    piel,
    cpiel,
    pigm,
    peso,
    cabello,
    ccabello,
    cojos,
    clabios,
    estatura,
    cdientes,
    handleInputChange
}) => {

    return (
        <div id="cf" className="tabcontent">
            <h2 className="titulo__index titulo__index--fs3 centrar-texto">Características Físicas</h2>


            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="piel">Tipo de piel</label>
                    <select
                        type="text"
                        name="piel"
                        id="piel"
                        value={piel}
                        className="input-style"
                        onChange={handleInputChange}
                    >
                        <option>--Seleccione la piel--</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="cpiel">Color de piel</label>
                    <select
                        type="text"
                        name="cpiel"
                        id="cpiel"
                        value={cpiel}
                        className="input-style"
                        onChange={handleInputChange}
                    >
                        <option>--Seleccione el color de piel--</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="pigm">Pigmentacion</label>
                    <select
                        type="text"
                        name="pigm"
                        id="pigm"
                        value={pigm}
                        className="input-style"
                        onChange={handleInputChange}
                    >
                        <option>--Seleccione la pigmentacion--</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="peso">Peso</label>
                    <input
                        type="number"
                        name="peso"
                        id="peso"
                        value={peso}
                        className="input-style"
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="cabello">Cabello</label>
                    <select
                        type="text"
                        name="cabello"
                        id="cabello"
                        value={cabello}
                        className="input-style"
                        onChange={handleInputChange}
                    >
                        <option>--Seleccione el cabello--</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="ccabello">Color Cabello</label>
                    <select
                        type="text"
                        name="ccabello"
                        id="ccabello"
                        value={ccabello}
                        className="input-style"
                        onChange={handleInputChange}
                    >
                        <option>--Seleccione el color del cabello--</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="cojos">Color de ojos</label>
                    <select
                        type="text"
                        name="cojos"
                        id="cojos"
                        value={cojos}
                        className="input-style"
                        onChange={handleInputChange}
                    >
                        <option>--Seleccione el color de ojos--</option>
                    </select>
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="clabios">Color de labios</label>
                    <select
                        type="text"
                        name="clabios"
                        id="clabios"
                        value={clabios}
                        className="input-style"
                        onChange={handleInputChange}
                    >
                        <option>--Seleccione el color de labios--</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <div className="input">
                    <label className="label bold" htmlFor="estatura">Estatura</label>
                    <input
                        type="number"
                        name="estatura"
                        id="estatura"
                        value={estatura}
                        className="input-style"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input">
                    <label className="label bold" htmlFor="cdientes">Color de dientes</label>
                    <select
                        type="text"
                        name="cdientes"
                        id="cdientes"
                        value={cdientes}
                        className="input-style"
                        onChange={handleInputChange}
                    >
                        <option>--Seleccione el color de dientes--</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FRDCaracteristicasFisicas;