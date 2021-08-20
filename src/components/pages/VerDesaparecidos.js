// Predefined packages
import React from 'react';
import CardDesaparecidos from './CardDesaparecidos';

// Assets


const VerDesaparecidos = ({setMenu}) => {
    return (
        <div className="contenedor container--1200">
            <h1 className="titulo__index" onClick={()=>setMenu(0)}>Desaparecidos</h1>

            <div className="cards__contenedor">
                <CardDesaparecidos/>
                <CardDesaparecidos/>
                <CardDesaparecidos/>
            </div>
        </div>
    );
}

export default VerDesaparecidos;