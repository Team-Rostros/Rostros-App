// Predefined packages
import React from 'react';

// Custom packages

const CardAnatomia = ({title, description}) => {
    return (
        <div className="card card__anatomia card__anatomia--45">
            <h3 className="centrar-texto">{title}</h3>
            <p className="justify line-height--1">
                {description}
            </p>
        </div>
    );
}

export default CardAnatomia;