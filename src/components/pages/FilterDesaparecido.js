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
        departamento: '',
        ciudad: '',
    });

    const { pais, departamento, ciudad } = values;

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

    const handleSearchDepartamento = (e) => {
        handleInputChange(e);
        const result = e.target.value === "Todos"
        ?
        desaparecidos
        :
        desaparecidos.filter((data) => {
            return data.departamento.search(e.target.value) !== -1;
        });
        setDesaparecidosFiltrados(result);
    }

    const handleSearchCiudad = (e) => {
        handleInputChange(e);
        console.log(e.target.value);
        const result = e.target.value === "Todos"
        ?
        desaparecidos.filter((data) => {
            return data.departamento.search(departamento) !== -1;
        })
        :
        desaparecidos.filter((data) => {
            return (data.ciudad.search(e.target.value) !== -1) && (data.departamento.search(departamento) !== -1);
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
                                        name="departamento"
                                        value={departamento}
                                        onChange={handleSearchDepartamento}
                                        required
                                    >
                                        <option value="Todos">Departamento</option>
                                        <option value="Huila">Huila</option>
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
                                        <option value="Acevedo">Acevedo</option>
                                        <option value="Algeciras">Algeciras</option>
                                        <option value="Altamira">Altamira</option>
                                        <option value="Baraya">Baraya</option>
                                        <option value="Campoalegre">Campoalegre</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Elias">Elias</option>
                                        <option value="El Agrado">El Agrado</option>
                                        <option value="Garzón">Garzón</option>
                                        <option value="Gigante">Gigante</option>
                                        <option value="Guadalupe">Guadalupe</option>
                                        <option value="Hobo">Hobo</option>
                                        <option value="Íquira">Íquira</option>
                                        <option value="Isnos">Isnos</option>
                                        <option value="La Argentina">La Argentina</option>
                                        <option value="La Plata">La Plata</option>
                                        <option value="Nátaga">Nátaga</option>
                                        <option value="Neiva">Neiva</option>
                                        <option value="Oporapa">Oporapa</option>
                                        <option value="Paicol">Paicol</option>
                                        <option value="Palermo">Palermo</option>
                                        <option value="Palestina">Palestina</option>
                                        <option value="Pital">Pital</option>
                                        <option value="Pitalito">Pitalito</option>
                                        <option value="Rivera">Rivera</option>
                                        <option value="Saladoblanco">Saladoblanco</option>
                                        <option value="Santa María">Santa María</option>
                                        <option value="San Agustín">San Agustín</option>
                                        <option value="Suaza">Suaza</option>
                                        <option value="Tarquí">Tarquí</option>
                                        <option value="Tello">Tello</option>
                                        <option value="Teruel">Teruel</option>
                                        <option value="Tesalia">Tesalia</option>
                                        <option value="Timaná">Timaná</option>
                                        <option value="Villavieja">Villavieja</option>
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