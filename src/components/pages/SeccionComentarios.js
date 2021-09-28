import React from 'react';

import ItemComentario from './ItemComentario';

// Assets
import male from '../../img/male.jpg';

const SeccionComentarios = ({id}) => {
    
    return (
        <section className="comentarios contenedor container--80rem">
            <h3 className="centrar-texto titulo__index titulo__index--fs3">Comentarios</h3>

            <ItemComentario
                urlImage={male}
                alt="Icono Foto"
                comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt voluptatibus ducimus ex eos vel impedit veniam tempore, illo, dolorem asperiores quasi. Quam saepe dolores voluptatem quisquam accusamus esse cum."
                time="Hace un instante"
            />
            <ItemComentario
                urlImage={male}
                alt="Icono Foto"
                comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt voluptatibus ducimus ex eos vel impedit veniam tempore, illo, dolorem asperiores quasi. Quam saepe dolores voluptatem quisquam accusamus esse cum."
                time="Hace un instante"
            />
            <ItemComentario
                urlImage={male}
                alt="Icono Foto"
                comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt voluptatibus ducimus ex eos vel impedit veniam tempore, illo, dolorem asperiores quasi. Quam saepe dolores voluptatem quisquam accusamus esse cum."
                time="Hace un instante"
            />
            <ItemComentario
                urlImage={male}
                alt="Icono Foto"
                comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim deserunt voluptatibus ducimus ex eos vel impedit veniam tempore, illo, dolorem asperiores quasi. Quam saepe dolores voluptatem quisquam accusamus esse cum."
                time="Hace un instante"
            />

        </section>
    );
}

export default SeccionComentarios;