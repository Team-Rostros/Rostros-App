import React from 'react';

const DInformacionRelevante = ({
    descripcion,
    className
}) => {
    return (
        <div className={`tabcontent ${className}`}>
            <h2 className="titulo__index titulo__index--fs3 centrar-texto">Información Relevante</h2>

            <div className="container--80rem">
                <form className="block__form">
                    <p className="centrar-texto">{descripcion}</p>
                </form>
            </div>
        </div>
    );
}

export default DInformacionRelevante;