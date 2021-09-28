// Predefined packages
import React from 'react';
import ReportarDesaparecido from './ReportarDesaparecido';

// Custom packages

const ActualizarDesaparecido = ({desaparecido, setMenuGlobal}) => {

    return (
        <ReportarDesaparecido desaparecido={desaparecido} setMenuGlobal={setMenuGlobal}/>
    );
}

export default ActualizarDesaparecido;