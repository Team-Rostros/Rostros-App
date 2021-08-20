// Predefined packages
import React from 'react';

// Asssets

const ItemComentario = ({urlImage, alt, comment, time}) => {
    return (
        <div className="grid grid__comentario">
            <div className="comentario__imagen">
                <img className="comentario__img" src={urlImage} alt={alt} />
            </div>

            <div className="comentario__texto">
                <p>{comment}</p>
                <span className="italic">{time}</span>
            </div>
        </div>
    );
}

export default ItemComentario;