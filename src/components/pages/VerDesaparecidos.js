// Predefined packages
import React, { useEffect, useState } from 'react';
import { calcularEdad, extraerFecha } from '../../utils/convertidor';
import { listarDesaparecido } from '../../utils/handleDesaparecido';
import CardDesaparecidos from './CardDesaparecidos';

// Assets


const VerDesaparecidos = ({ setMenu }) => {
    const [desaparecidos, setDesaparecidos] = useState([]);
    const loadDesaparecidos = async () => {
        setDesaparecidos(await listarDesaparecido());
    }
    useEffect(() => {
        loadDesaparecidos();
    }, [])
    return (
        <div className="contenedor container--1200">
            <h1 className="titulo__index" onClick={() => setMenu(0)}>Desaparecidos</h1>

            <div className="cards__contenedor">
                {desaparecidos.map(d => (<CardDesaparecidos
                    key={d._id}
                    id={d._id}
                    nombre={`${d.nombre1} ${d.nombre2} ${d.apellido1} ${d.apellido2}`}
                    pais={d.pais}
                    fechad={extraerFecha(d.fechad)}
                    departamento={d.departamento}
                    ciudad={d.ciudad}
                    genero={d.genero}
                    edad={calcularEdad(d.fechaNacimiento)}
                />))}
            </div>
        </div>
    );
}

export default VerDesaparecidos;