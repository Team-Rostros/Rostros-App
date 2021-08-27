// Predefined packages
import React from 'react';
import CardDesaparecidos from './CardDesaparecidos';

// Assets
import search from '../../img/search.png';
import filter from '../../img/filter.png';

const VerDesaparecidos = ({ setMenu }) => {
    return (
        <>
            <div className="search">
                <input className="input__search" type="search" placeholder="Consulte por el nombre" />
                <button className="btn__search"><img className="search__img" src={search} alt="Buscar" /></button>
            </div>

            <div className="filter">
                <div className="filter__checks">
                    <button><img className="filter__img" src={filter} alt="Filtrar" /></button>
                    <input type="checkbox" name="asc" id="asc" />Más reciente
                    <input type="checkbox" name="des" id="desc" />Más antigua
                </div>
            </div>

            <div className="contenedor container--1200">
                <h1 className="titulo__index" onClick={() => setMenu(0)}>Desaparecidos</h1>

                <div className="cards__contenedor">
                    <CardDesaparecidos />
                    <CardDesaparecidos />
                    <CardDesaparecidos />
                </div>
            </div>
        </>
    );
}

export default VerDesaparecidos;