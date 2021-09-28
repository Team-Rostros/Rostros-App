// Predefined packages
import React, {useEffect, useState } from 'react';

// Custom packages
import { calcularEdad, extraerFecha } from '../../utils/convertidor';
import { listarPublicaciones } from '../../utils/handleDesaparecido';
import CardDesaparecidos from './CardDesaparecidos';
import FilterDesaparecido from './FilterDesaparecido';

// Assets

const MisPublicaciones = ({ setMenu, setDesaparecido, usuario }) => {

    const [desaparecidos, setDesaparecidos] = useState([]);
    const [desaparecidosFiltrados, setDesaparecidosFiltrados] = useState(desaparecidos);

    const loadDesaparecidos = async (id) => {

        const data = await listarPublicaciones(id);
        setDesaparecidos(data);
        setDesaparecidosFiltrados(data.reverse());
    }

    useEffect(() => {
        loadDesaparecidos(usuario? usuario._id:0);
    }, [usuario]);

    return (
        <div className="contenedor container--1200">
            <h1 className="titulo__index">Mis Publicaciones</h1>

            <FilterDesaparecido
                desaparecidos={desaparecidos}
                desaparecidosFiltrados={desaparecidosFiltrados}
                setDesaparecidosFiltrados={setDesaparecidosFiltrados}
            />
            {desaparecidosFiltrados.length === 0 && <p className="no_results">No hay resultados disponibles...</p>
            }
            <div className="cards__contenedor">
                {desaparecidosFiltrados.map(d => (<CardDesaparecidos
                    desaparecido={d}
                    key={d._id}
                    id={d._id}
                    nombre={`${d.nombre1} ${d.nombre2} ${d.apellido1} ${d.apellido2}`}
                    pais={d.pais}
                    fechad={extraerFecha(d.fechad)}
                    departamento={d.departamento}
                    ciudad={d.ciudad}
                    genero={d.genero}
                    edad={calcularEdad(d.fechaNacimiento)}
                    setDesaparecido={setDesaparecido}
                    setMenu={setMenu}
                />))
                }
            </div>
        </div>
    );
}

export default MisPublicaciones;