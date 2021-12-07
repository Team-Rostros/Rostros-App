import React, { useState } from 'react';

// Assets
import search from '../../img/search.png';
import filter from '../../img/filter.png';
import { useForm } from '../../hooks/useForm';
import FilterASCDESC from './FilterASCDESC';

const FilterDesaparecido = ({ desaparecidos, setDesaparecidosFiltrados }) => {

    const handleSearchName = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];
        result = desaparecidos.filter((data) => {
            return data.nombre.toLowerCase().search(value) !== -1;
        });
        setDesaparecidosFiltrados(result);
    }

    const [values, handleInputChange] = useForm({
        pais: '',
        ciudad: '',
    });

    const { pais, ciudad } = values;

    const handleSearchPais = (e) => {
        handleInputChange(e);
        const result = e.target.value === "Todos"
        ?
        desaparecidos
        :
        desaparecidos.filter((data) => {
            return data.pais.search(e.target.value) !== -1;
        });
        setDesaparecidosFiltrados(result);
    }

    const handleSearchCiudad = (e) => {
        handleInputChange(e);
        console.log(e.target.value);
        const result = e.target.value === "Todos"
        ?
        desaparecidos.filter((data) => {
            return data.pais.search(pais) !== -1;
        })
        :
        desaparecidos.filter((data) => {
            return (data.ciudad.search(e.target.value) !== -1) && (data.pais.search(pais) !== -1);
        });
        setDesaparecidosFiltrados(result);
    }
    return (
        <>
            <div className="search">
                <input
                    name="search"
                    className="input__search"
                    type="search" placeholder="Nombre del desaparecido"
                    onChange={handleSearchName}
                />
                <button className="btn__search">
                    <img className="search__img" src={search} alt="Buscar" />
                </button>
            </div>

            <div className="filter">
                <div className="filter__checks">

                    <FilterASCDESC setList={setDesaparecidosFiltrados} />
                    
                    <div className="filter__section_2">
                        <h5>Por ubicación</h5>
                        <div className="filter__item">

                            <div className="input-group">
                                <div className="input">
                                    <select
                                        className="input-style-filter"
                                        name="pais"
                                        value={pais}
                                        onChange={handleSearchPais}
                                        required
                                    >
                                        <option value="Todos">País</option>
                                        <option value="Colombia">Colombia</option>
                                    </select>
                                </div>

                                <div className="input">
                                    <select
                                        className="input-style-filter"
                                        name="ciudad"
                                        value={ciudad}
                                        onChange={handleSearchCiudad}
                                        required
                                    >
                                        <option value="Todos">Ciudad</option>
                                        <option value="Neiva">Neiva</option>
                                        <option value="Pitalito">Pitalito</option>
                                        <option value="La Plata">La Plata</option>
                                        <option value="Garzón">Garzón</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default FilterDesaparecido;