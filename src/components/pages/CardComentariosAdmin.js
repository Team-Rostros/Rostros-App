// Predefined packages
import React from 'react';

// Custom packages
import { extraerFecha } from '../../utils/convertidor';

const CardComentariosAdmin = ({
    _id,
    descripcion,
    creador,
    desaparecido,
    createdAt,
    eliminar
}) => {
    console.log(creador);
    return (
        
        <div className="grid grid__comentario">
            <div className="comentario__imagen">
            <img className="card__imgdes" src={`http://localhost:4000/api/desaparecido/photo/${desaparecido._id}`} alt="Foto perfil" />
            </div>

            <div className="comentario__texto">
                <p>Comentario: {descripcion}</p>
                <div className="comentario__flex">
                    <span className="italic"> Creado en {extraerFecha(createdAt)} </span>
                    <span className="italic"> Autor: {`${creador.nombre} ${creador.apellido}`} </span>
                    <span className="italic"> Desaparecido: {`${desaparecido?.nombre1} ${desaparecido?.apellido1}`} </span>
                </div>
            </div>
            <a href="#/" onClick={()=>eliminar(_id)} className="subir__btn subir__btn--rojo centrar-texto bold subir__btn--100">Eliminar</a>
        </div>
    );
}

export default CardComentariosAdmin;