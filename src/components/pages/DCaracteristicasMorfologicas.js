import React from 'react';

const DCaracteristicasMorfologicas = ({
    craneo,
    rostro,
    cuello,
    ojos,
    cuerpo,
    labios,
    oreja,
    nariz,
    className
}) => {
    return (
        <div className={`tabcontent ${className}`}>
                <h2 className="titulo__index titulo__index--fs3 centrar-texto">Características Morfológicas</h2>

                {/**Formulario */}

                <form className="grid__form container--80rem">
                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="craneo">Craneo</label>
                            <p className="centrar-texto">{craneo}</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="rostro">Rostro</label>
                            <p className="centrar-texto">{rostro}</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cuello">Cuello</label>
                            <p className="centrar-texto">{cuello}</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="ojos">Ojos</label>
                            <p className="centrar-texto">{ojos}</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="cuerpo">Cuerpo</label>
                            <p className="centrar-texto">{cuerpo}</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="labios">Labios</label>
                            <p className="centrar-texto">{labios}</p>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="oreja">Orejas</label>
                            <p className="centrar-texto">{oreja}</p>
                        </div>

                        <div className="input">
                            <label className="label bold centrar-texto" htmlFor="nariz">Nariz</label>
                            <p className="centrar-texto">{nariz}</p>
                        </div>
                    </div>
                </form>
            </div>
    );
}

export default DCaracteristicasMorfologicas;