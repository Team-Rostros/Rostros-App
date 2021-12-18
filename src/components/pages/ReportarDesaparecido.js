// Predefined packages
import React, { useState, useRef, useContext } from 'react';

// Custom packages
import AlertaContext from '../../context/alertas/alertaContext';
import FRDCaracteristicaMorfologicas from './FRDCaracteristicaMorfologicas';
import FRDCaracteristicasFisicas from './FRDCaracteristicasFisicas';
import FRDInformacionPersonal from './FRDInformacionPersonal';
import FRDInformacionRelevante from './FRDInformacionRelevante';
import { actualizarDesaparecido, reportarDesaparecido } from '../../utils/handleDesaparecido';
import { useForm } from '../../hooks/useForm';
//import { useForm} from "react-hook-form";
import AuthContext from '../../context/autenticacion/authContext';


//Sweet Alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { initialDataDesaparecido } from '../../fixtures/formData';
import { extraerFecha } from '../../utils/convertidor';



const ReportarDesaparecido = ({ desaparecido, setMenuGlobal }) => {

    //const { register, handleSubmit, formState: { errors } } = useForm();

    //Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //Extraer los valores del context
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado } = authContext;

    const [values, handleInputChange, cleanOBjects] = useForm(desaparecido
        ?
        {...desaparecido, fechad: extraerFecha(desaparecido.fechad)}
        :
        initialDataDesaparecido);

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
        // informacion relevante
        descripcion
    } = values;

    const file = useRef();

    const [menu, setMenu] = useState(1);

    const sweetAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son requeridos incluida la imagen'
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault();

        await usuarioAutenticado();

        
        

        if (desaparecido) {
            const data = await actualizarDesaparecido({ ...values, creador: usuario._id }, file.current ? file.current.files[0] : 0);
            if (data) {
                Swal.fire(
                    '¡Buen trabajo!',
                    '¡Se actualizó el registro!',
                    'success'
                );
                setMenuGlobal(0);
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error al intentar actualizar',
                  })
            }

            setMenu(1);
        } else {

            if (file.current.files[0]) {

                //Validar que no haya campos vacios
                if(nombre1.trim === '' || nombre2.trim === '' || apellido1.trim === '' || apellido2.trim === '' || zipcode.trim === '' || peso.trim === '' || estatura.trim === '' ){
                    //mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                    alert('hola')
                    return;
                }

                const data = await reportarDesaparecido({ ...values, creador: usuario._id }, file.current ? file.current.files[0] : 0);

                if (data) {
                    Swal.fire(
                        '¡Buen trabajo!',
                        'Se creó exitosamente',
                        'success'
                    );
                    cleanOBjects();
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No se ha reportado al desaparecido que intentas registrar'
                      });
                }

                setMenu(1);

            } else {
                sweetAlert();
                setMenu(1);
                return;
            }
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


            <form className="grid__form container--80rem" onSubmit={onSubmit}>
                <FRDInformacionPersonal
                    desaparecido={desaparecido}
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