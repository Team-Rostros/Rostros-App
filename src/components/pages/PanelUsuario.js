// Predefined packages
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/autenticacion/authContext';


// Custom packages
import VerDesaparecidos from './VerDesaparecidos';
import ItemDesaparecido from './ItemDesaparecido';
import Donaciones from './Donaciones';
import ReportarDesaparecido from './ReportarDesaparecido';
import ActualizarDesaparecido from './ActualizarDesaparecido';
import MisPublicaciones from './MisPublicaciones';

// Assets
import logoazulv from '../../img/logoazulv.png';
import home from '../../img/home.png';
import usersolid from '../../img/usersolid.png';
import userfriends from '../../img/userfriends.png';
import question from '../../img/question.png';
import Bell from '../../img/bell.png';
import coinz from '../../img/coinz.png';
import document from '../../img/file-alt-solid.png';
import misPublicaciones from '../../img/mis-publicaciones.png';

//Sweet Alert
import Swal from 'sweetalert2';



const PanelUsuario = () => {

    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, cerrarSesion } = authContext;

    const [desaparecido, setDesaparecido] = useState(0);

    const [menu, setMenu] = useState(0);

    const sweetAlert = () => {
        let timerInterval
        Swal.fire({
            title: 'Cerrando Sesion',
            timer: 1500,
            timerProgressBar: true,
        }).then((result) => {
            
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })

        setTimeout(() => {
            cerrarSesion();
        }, 2000)


    }

    return (
        <div className="grid__desaparecido">
            <aside className="grid__aside">

                <Link to="/">
                    <img className="aside__imagen logo__aside" src={logoazulv} alt="Logo Rostros" />
                </Link>

                <div className="item__aside">
                    <Link to="/">
                        <img className="aside__imagen" src={home} alt="Icono Home" />
                        <h3 className="titulo__aside centrar-texto">Inicio</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" onClick={() => setMenu(0)}>
                        <img className="aside__imagen" src={misPublicaciones} alt="Icono User" />
                        <h3 className="titulo__aside centrar-texto">Mis Publicaciones</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" data-cy="reportar-input" onClick={() => setMenu(1)}>
                        <img className="aside__imagen" src={usersolid} alt="Icono User" />
                        <h3 className="titulo__aside centrar-texto">Reportar Desaparecido</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" data-cy="comentario-input" onClick={() => setMenu(2)}>
                        <img className="aside__imagen" src={userfriends} alt="Icono Users" />
                        <h3 className="titulo__aside centrar-texto">Ver Desaparecidos</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="/donar">
                        <img className="aside__imagen" src={coinz} alt="Icono Coin" />
                        <h3 className="titulo__aside centrar-texto">Donar</h3>
                    </Link>
                </div>

                <div className="item__aside d-none">
                    <Link to="#/" onClick={() => setMenu(3)}>
                        <img className="aside__imagen" src={coinz} alt="Icono Coin" />
                        <h3 className="titulo__aside centrar-texto">Donar</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="/centro-ayuda" target="_blank">
                        <img className="aside__imagen" src={question} alt="Icono Question" />
                        <h3 className="titulo__aside centrar-texto">Ayuda</h3>
                    </Link>
                </div>

                <div className="item__aside d-none">
                    <Link to="#/" onClick={() => setMenu(4)}>
                        <img className="aside__imagen" src={question} alt="Icono Question" />                      
                        <h3 className="titulo__aside centrar-texto">Ayuda</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to={{ pathname: "https://rostrosdoc.netlify.app/" }} target="_blank">
                        <img className="aside__imagen" src={document} alt="Icono Documentation" />   
                        <h3 className="titulo__aside centrar-texto">Documentación</h3>
                    </Link>
                </div>
            </aside>

            <div className="grid__main">

                <nav className="flexbox">
                    <Link className="label__nav" to="/#">
                        <img className="flexbox__navimagen flexbox__navimagen--bell centrar-texto" src={Bell} alt="Icono Campana" />
                    </Link>
                    <Link className="label__nav" to="/#">
                        {usuario ? <a className="label__nav" >{usuario.nombre}</a> : null}
                    </Link>
                    <button
                        className="label__nav"
                        onClick={() => sweetAlert()}
                    >Salir</button>

                </nav>

                {/** Secciones */}

                {menu === 0
                    ?

                    <MisPublicaciones
                                setMenu={setMenu}
                                setDesaparecido={setDesaparecido}
                                usuario={usuario}
                    />
                   
                    :
                    menu === 1
                        ?
                        <ReportarDesaparecido />
                        :
                        menu === 2
                            ?
                            <VerDesaparecidos
                                setMenu={setMenu}
                                setDesaparecido={setDesaparecido}
                            />
                            :
                            menu === 4
                                ?
                                <ActualizarDesaparecido desaparecido={desaparecido} setMenuGlobal={setMenu} />
                                :
                                <ItemDesaparecido desaparecido={desaparecido} setMenuGlobal={setMenu} />
                }

            </div>
        </div>
    );
}

export default PanelUsuario;