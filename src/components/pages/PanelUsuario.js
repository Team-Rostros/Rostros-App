// Predefined packages
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/autenticacion/authContext';


// Custom packages
import VerDesaparecidos from './VerDesaparecidos';

import ItemDesaparecido from './ItemDesaparecido';
import ReportarDesaparecido from './ReportarDesaparecido';

// Assets
import logoazulv from '../../img/logoazulv.png';
import home from '../../img/home.png';
import usersolid from '../../img/home.png';
import userfriends from '../../img/userfriends.png';
import question from '../../img/question.png';
import Bell from '../../img/bell.png';
import language from '../../img/language.png';
import signout from '../../img/signout.png';
import coinz from '../../img/coinz.png';
import misPublicaciones from '../../img/mis-publicaciones.png';

//Sweet Alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ActualizarDesaparecido from './ActualizarDesaparecido';
import MisPublicaciones from './MisPublicaciones';

const PanelUsuario = () => {

    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuario, usuarioAutenticado, cerrarSesion} = authContext;

    const [desaparecido, setDesaparecido] = useState(0);

    const loadUsuario =async()=>{
        await usuarioAutenticado();
    }

    useEffect(()=>{
        loadUsuario();
    }, []);
    
    const [menu, setMenu] = useState(0);

    const sweetAlert = ()=>{
        let timerInterval
        Swal.fire({
        title: 'Cerrando Sesion',
        timer: 1500,
        timerProgressBar: true,
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
        })

        setTimeout(()=>{
            cerrarSesion();
        },3000)

        
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
                    <Link to="#/" onClick={()=>setMenu(0)}>
                        <img className="aside__imagen" src={misPublicaciones} alt="Icono User" />
                        <h3 className="titulo__aside centrar-texto">Mis Publicaciones</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" onClick={()=>setMenu(1)}>
                        <img className="aside__imagen" src={usersolid} alt="Icono User" />
                        <h3 className="titulo__aside centrar-texto">Reportar Desaparecido</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" onClick={()=>setMenu(2)}>
                        <img className="aside__imagen" src={userfriends} alt="Icono Users" />
                        <h3 className="titulo__aside centrar-texto">Ver Desaparecidos</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" onClick={()=>setMenu(3)}>
                        <img className="aside__imagen" src={coinz} alt="Icono Coin" />
                        <h3 className="titulo__aside centrar-texto">Donar</h3>
                    </Link>
                </div>

                <div className="item__aside">
                    <Link to="#/" onClick={()=>setMenu(4)}>
                        <img className="aside__imagen" src={question} alt="Icono Question" />
                        <h3 className="titulo__aside centrar-texto">Ayuda</h3>
                    </Link>
                </div>
            </aside>

            <div className="grid__main">

                <nav className="flexbox">
                    <Link className="label__nav" to="/#">
                        <img className="flexbox__navimagen flexbox__navimagen--bell centrar-texto" src={Bell} alt="Icono Campana" />
                    </Link>
                    <Link className="label__nav" to="/#">
                        {usuario ?<a className="label__nav" >{usuario.nombre}</a> : null}
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
                <ItemDesaparecido desaparecido={desaparecido} setMenuGlobal={setMenu}/>
                }
                
            </div>
        </div>
    );
}

export default PanelUsuario;