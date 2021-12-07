// Predefined packages
import React from 'react';

// Asssets

import female from '../../img/female.png';
import { extraerFecha } from '../../utils/convertidor';



const ItemComentario = ({comentario, creador}) => {
    console.log(comentario);
    console.log(creador.nombre);
    return (
        <div className="grid grid__comentario">
            <div className="comentario__imagen">
                <img className="comentario__img" src={female} alt="Avatar del creador del comentario" />
            </div>

            <div className="comentario__texto">
                <p>Comentario: {comentario.descripcion}</p>
                <span className="italic mr-3">Creado en {extraerFecha(comentario.createdAt)}</span>
                <span className="italic">Creado por : {`${comentario.creador}`} </span>
                
            </div>

        </div>
    );
}

export default ItemComentario;