import React from 'react';

const DCaracteristicasFisicas = ({
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
    className
}) => {
    return (
        <div className={`tabcontent ${className}`}>
                <h2 className="titulo__index titulo__index--fs3 centrar-texto">Características Físicas</h2>

                <form className="grid__form container--80rem">
                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="piel">Tipo de piel</label>
                            <p className="centrar-texto">{piel}</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cpiel">Color de piel</label>
                            <p className="centrar-texto">{cpiel}</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="pigm">Pigmentacion</label>
                            <p className="centrar-texto">{pigm}</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="peso">Peso</label>
                            <p className="centrar-texto">{peso}</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cabello">Cabello</label>
                            <p className="centrar-texto">{cabello}</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="ccabello">Color Cabello</label>
                            <p className="centrar-texto">{ccabello}</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cojos">Color de ojos</label>
                            <p className="centrar-texto">{cojos}</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="clabios">Color de labios</label>
                            <p className="centrar-texto">{clabios}</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cojos">Estatura</label>
                            <p className="centrar-texto">{estatura}</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cdientes">Color de dientes</label>
                            <p className="centrar-texto">{cdientes}</p>
                        </div>
                    </div>
                </form>
            </div>
    );
}

export default DCaracteristicasFisicas;