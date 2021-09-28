// Predefined packages
import React, { useState } from 'react';
import { marcarEncontrado } from '../../utils/handleDesaparecido';

// Custom packages

import DCaracteristicasFisicas from './DCaracteristicasFisicas';
import DCaracteristicasMorfologicas from './DCaracteristicasMorfologicas';
import DInformacionPersonal from './DInformacionPersonal';
import DInformacionRelevante from './DInformacionRelevante';
import SeccionComentarios from './SeccionComentarios';

const ItemDesaparecido = ({desaparecido, setMenuGlobal}) => {

    const d = desaparecido;

    const actualizarEstado = async ()=>{
        const data = await marcarEncontrado(d._id);
        if(data){
            alert('Hemos enviado la notificación de que has visto a esta persona, se te contactará en breve. Gracias.')
            setMenuGlobal(2);
        }
    }

    const [menu, setMenu] = useState(1);

    return (
        <div className="contenedor container--1200">
            <h1 className="titulo__index">Detalle del Desaparecido</h1>

            <div className="tab">
                <button className="tablinks" onClick={() => setMenu(1)}>Información Personal</button>
                <button className="tablinks" onClick={() => setMenu(2)}>Características M</button>
                <button className="tablinks" onClick={() => setMenu(3)}>Características F</button>
                <button className="tablinks" onClick={() => setMenu(4)}>Información Relevante</button>
            </div>

            <DInformacionPersonal
                    id={d._id}
                    nombre1={d.nombre1}
                    apellido1={d.apellido1}
                    nombre2={d.nombre2}
                    apellido2={d.apellido2}
                    genero={d.genero}
                    fechaNacimiento={d.fechaNacimiento}
                    pais={d.pais}
                    departamento={d.departamento}
                    ciudad={d.ciudad}
                    zipcode={d.zipcode}
                    fechad={d.fechad}
                    className={`${menu === 1 ? 'd-bloc' : 'd-none'}`}
                />

                <DCaracteristicasMorfologicas
                    craneo={d.craneo}
                    rostro={d.rostro}
                    cuello={d.cuello}
                    ojos={d.ojos}
                    cuerpo={d.cuerpo}
                    labios={d.labios}
                    oreja={d.oreja}
                    nariz={d.nariz}
                    className={`${menu === 2 ? 'd-bloc' : 'd-none'}`}
                />

                <DCaracteristicasFisicas
                    piel={d.piel}
                    cpiel={d.cpiel}
                    pigm={d.pigm}
                    peso={d.peso}
                    cabello={d.cabello}
                    ccabello={d.ccabello}
                    cojos={d.cojos}
                    clabios={d.clabios}
                    estatura={d.estatura}
                    cdientes={d.cdientes}
                    className={`${menu === 3 ? 'd-bloc' : 'd-none'}`}
                />

                <DInformacionRelevante
                    descripcion={d.descripcion}
                    className={`${menu === 4 ? 'd-bloc' : 'd-none'}`}
                />

            {menu !== 4 && <a href="#/" onClick={() => setMenu(c => c + 1)} className="subir__btn centrar-texto bold">Siguiente</a>}

            <a href="#/" onClick={actualizarEstado} className="subir__btn centrar-texto bold subir__btn--verde">Marcar como encontrada</a>

            <SeccionComentarios desaparecido={d}/>

        </div>
    );
}

export default ItemDesaparecido;