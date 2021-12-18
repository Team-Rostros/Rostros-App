import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { eliminarComentario, listarComentario } from '../../utils/admin_util';
import CardComentariosAdmin from './CardComentariosAdmin';
import FilterASCDESC from './FilterASCDESC';

const VerComentariosAdmin = () => {
    const [comentarios, setComentarios] = useState([]);

    const loadComentarios = async () => {
        const data = await listarComentario();
        setComentarios(data);
    }

    const eliminar = async (id) => {

        const resultado = await Swal.fire({
            title: "¿Realmente desea eliminar el comentario?",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Sí",
        });

        if (resultado.isConfirmed) {
            const data = await eliminarComentario(id);

            console.log(data);
            if (data._id) {
                setComentarios(c => [...c].filter(c => c._id != id));
                Swal.fire(
                    'Eliminado Correctamente',
                    '¡Todo salió bien!',
                    'success'
                );
            }
        }
    }

    useEffect(() => {
        loadComentarios();
    }, []);

    return (
        <div className="contenedor container--1200">
            <h1 className="titulo__index">Comentarios</h1>
            
            <div className="filter">
                <div className="filter__checks">
                    <FilterASCDESC setList={setComentarios} />
                </div>
            </div>            

            <div className="cards__contenedor">
                {comentarios.map((c) => <CardComentariosAdmin key={c._id} {...c} eliminar={eliminar} />)}
            </div>
        </div>
    );
}

export default VerComentariosAdmin;