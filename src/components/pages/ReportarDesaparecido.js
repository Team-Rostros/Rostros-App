// Predefined packages
import React, { useState, useRef, useContext } from 'react';
import FRDCaracteristicaMorfologicas from './FRDCaracteristicaMorfologicas';
import FRDCaracteristicasFisicas from './FRDCaracteristicasFisicas';

// Custom packages
import FRDInformacionPersonal from './FRDInformacionPersonal';
import FRDInformacionRelevante from './FRDInformacionRelevante';
import { reportarDesaparecido } from '../../utils/handleDesaparecido';
import { useForm } from '../../hooks/useForm';
import AuthContext from '../../context/autenticacion/authContext';


const ReportarDesaparecido = () => {

    //Extraer los valores del context
    const authContext = useContext(AuthContext);
    const{ usuario, usuarioAutenticado } = authContext;

    const [values, handleInputChange, cleanOBjects] = useForm({
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
        descripcion:'',
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (file.current.files[0]) {
            
            await usuarioAutenticado();

            const data = await reportarDesaparecido({...values, creador: usuario._id}, file.current ? file.current.files[0] : 0);
            if (data) {
                alert("Se creó exitosamente");
                cleanOBjects();
            }
            else {
                alert("No se ha reportado al desaparecido que intentas registrar");
            }

            setMenu(1);

        } else {
            alert("Es requerido seleccionar una imagen. Todos los campos son requeridos");
            setMenu(1);
            return;
        }
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
                    className={`${menu === 1 ? 'd-bloc' : 'd-none'}`}
                />

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
                    className={`${menu === 2 ? 'd-bloc' : 'd-none'}`}
                />

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
                    className={`${menu === 3 ? 'd-bloc' : 'd-none'}`}
                />

                <FRDInformacionRelevante
                    descripcion={descripcion}
                    handleInputChange={handleInputChange}
                    className={`${menu === 4 ? 'd-bloc' : 'd-none'}`}
                />

            </form>
            {menu !== 4 && <a href="#/" onClick={() => setMenu(c => c + 1)} className="subir__btn centrar-texto bold">Siguiente</a>}
        </div>
    );
}
export default ReportarDesaparecido;