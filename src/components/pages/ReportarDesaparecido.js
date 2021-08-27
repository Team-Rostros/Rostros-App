// Predefined packages
import React, { useState, useRef } from 'react';
import { useForm } from '../../hooks/userForm';
import FRDCaracteristicaMorfologicas from './FRDCaracteristicaMorfologicas';
import FRDCaracteristicasFisicas from './FRDCaracteristicasFisicas';

// Custom packages
import FRDInformacionPersonal from './FRDInformacionPersonal';
import FRDInformacionRelevante from './FRDInformacionRelevante';


const ReportarDesaparecido = () => {

    const [values, handleInputChange] = useForm({
        // Campos de información personal
        nombre1: '',
        apellido1: '',
        nombre2: '',
        apellido2: '',
        genero: '',
        fechaNacimiento: '',
        pais: '',
        departamento: '',
        ciudad: '',
        zipcode: '',
        fechad: '',

        // Campos de caracteríticas morfológicas
        craneo: '',
        rostro: '',
        cuello: '',
        ojos: '',
        cuerpo: '',
        labios: '',
        oreja: '',
        nariz: '',

        // Campos de caracteríticas físicas
        piel: '',
        cpiel: '',
        pigm: '',
        peso: '',
        cabello: '',
        ccabello: '',
        cojos: '',
        clabios: '',
        estatura: '',
        cdientes: '',

        // Campos de información relevante
    });

    const {
        nombre1,
        apellido1,
        nombre2,
        apellido2,
        genero,
        fechaNacimiento,
        pais,
        departamento,
        ciudad,
        zipcode,
        fechad,
        // características morfológicas
        craneo,
        rostro,
        cuello,
        ojos,
        cuerpo,
        labios,
        oreja,
        nariz,
        // caracteríticas físicas
        piel,
        cpiel,
        pigm,
        peso,
        cabello,
        ccabello,
        cojos,
        clabios,
        estatura,
        cdientes,
        // infromacion relevante
        descripcion
    } = values;

    const file = useRef();

    const [menu, setMenu] = useState(1);

    const handleSubmit =async(e)=>{
        e.preventDefault();

        /* Enviar el objeto que contiene los datos.

        const data = await reportarDesaparecido(values);
        
        */
    }

    return (
        <div className="contenedor container--1200">
            <h1 className="titulo__index">Solicitud del reporte desaparecido</h1>

            <div className="tab">
                <button className="tablinks" onClick={() => setMenu(1)}>Información Personal</button>
                <button className="tablinks" onClick={() => setMenu(2)}>Características M</button>
                <button className="tablinks" onClick={() => setMenu(3)}>Características F</button>
                <button className="tablinks" onClick={() => setMenu(4)}>Información Relevante</button>
            </div>


            <form className="grid__form container--80rem" onSubmit={handleSubmit}>
                {menu === 1 ?
                    <FRDInformacionPersonal
                        file={file}
                        nombre1={nombre1}
                        apellido1={apellido1}
                        nombre2={nombre2}
                        apellido2={apellido2}
                        genero={genero}
                        fechaNacimiento={fechaNacimiento}
                        pais={pais}
                        departamento={departamento}
                        ciudad={ciudad}
                        zipcode={zipcode}
                        fechad={fechad}
                        handleInputChange={handleInputChange}
                    />
                    :
                    menu === 2 ?
                        <FRDCaracteristicaMorfologicas
                            craneo={craneo}
                            rostro={rostro}
                            cuello={cuello}
                            ojos={ojos}
                            cuerpo={cuerpo}
                            labios={labios}
                            oreja={oreja}
                            nariz={nariz}
                            handleInputChange={handleInputChange}
                        />
                        :
                        menu === 3 ?
                            <FRDCaracteristicasFisicas
                                piel={piel}
                                cpiel={cpiel}
                                pigm={pigm}
                                peso={peso}
                                cabello={cabello}
                                ccabello={ccabello}
                                cojos={cojos}
                                clabios={clabios}
                                estatura={estatura}
                                cdientes={cdientes}
                                handleInputChange={handleInputChange}
                            />
                            :
                            <FRDInformacionRelevante
                                descripcion={descripcion}
                                handleInputChange={handleInputChange}
                            />
                }

            </form>
            {menu!==4 && <a href="#/" onClick={()=>setMenu(c=>c+1)} className="subir__btn centrar-texto bold">Siguiente</a>}
        </div>
    );
}
export default ReportarDesaparecido;