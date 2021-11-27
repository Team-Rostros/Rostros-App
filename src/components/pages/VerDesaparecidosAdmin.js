import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { eliminarDesaparecido } from '../../utils/admin_util';
import { calcularEdad, extraerFecha } from '../../utils/convertidor';
import { listarDesaparecido } from '../../utils/handleDesaparecido';
import CardDesaparecidoAdmin from './CardDesaparecidoAdmin';
import FilterDesaparecido from './FilterDesaparecido';

const VerDesaparecidosAdmin = () => {
    const [desaparecidos, setDesaparecidos] = useState([]);
    const [desaparecidosFiltrados, setDesaparecidosFiltrados] = useState(desaparecidos);

    const loadDesaparecidos = async () => {
        const data = await listarDesaparecido();
        setDesaparecidos(data);
        setDesaparecidosFiltrados(data.reverse());
    }

    useEffect(() => {
        loadDesaparecidos();
    }, []);

    const eliminar = async (id) => {

        const resultado = await Swal.fire({
            title: "¿Realmente desea eliminar el reporte?",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Sí",
        });

        if (resultado.isConfirmed) {
            const data = await eliminarDesaparecido(id);
            if (data._id) {
                setDesaparecidos(c => [...c].filter(c => c._id != id));
                Swal.fire(
                    'Eliminado Correctamente',
                    '¡Todo salió bien!',
                    'success'
                );
            }

        }
    }

    useEffect(() => {
        loadDesaparecidos();
    }, []);

    return (
        <div className="contenedor container--1200">
            <h1 className="titulo__index">Desaparecidos</h1>
            <FilterDesaparecido
                desaparecidos={desaparecidos}
                desaparecidosFiltrados={desaparecidosFiltrados}
                setDesaparecidosFiltrados={setDesaparecidosFiltrados}
            />
            {desaparecidosFiltrados.length === 0 && <p className="no_results">No hay resultados disponibles...</p>
            }
            <div className="cards__contenedor">
                {desaparecidosFiltrados.map((d) => <CardDesaparecidoAdmin
                    key={d._id}
                    id={d._id}
                    nombre={`${d.nombre1} ${d.nombre2} ${d.apellido1} ${d.apellido2}`}
                    pais={d.pais}
                    fechad={extraerFecha(d.fechad)}
                    departamento={d.departamento}
                    ciudad={d.ciudad}
                    genero={d.genero}
                    edad={calcularEdad(d.fechaNacimiento)}
                    eliminar={eliminar}
                />)}
            </div>
        </div>
    );
}

export default VerDesaparecidosAdmin;