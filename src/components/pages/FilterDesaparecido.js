import React, { useState } from 'react';

// Assets
import search from '../../img/search.png';
import filter from '../../img/filter.png';
import { useForm } from '../../hooks/useForm';

const FilterDesaparecido = ({ desaparecidos, setDesaparecidosFiltrados }) => {

    const handleSearchName = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];
        result = desaparecidos.filter((data) => {
            return data.nombre.toLowerCase().search(value) !== -1;
        });
        setDesaparecidosFiltrados(result);
    }

    const [selected, setSelected] = useState('asc');

    const selectRadio = (value) => {
        setSelected(value);
        setDesaparecidosFiltrados(c => [...c].reverse());
    }

    const [values, handleInputChange] = useForm({
        pais: '',
        ciudad: '',
    });
    
    const { pais, ciudad } = values;

    const handleSearchPais = (e) => {
        handleInputChange(e);
        const result = desaparecidos.filter((data) => {
            return data.pais.search(e.target.value) !== -1;
        });
        setDesaparecidosFiltrados(result);
    }

    const handleSearchCiudad = (e) => {
        handleInputChange(e);
        const result = desaparecidos.filter((data) => {
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

                    <img className="filter__img" src={filter} alt="Filtrar" />

                    <div className="filter__section_1">
                        <div className="filter__item">
                            <input
                                type="radio"
                                value="asc"
                                id="asc"
                                checked={selected === 'asc'}
                                onClick={() => selectRadio('asc')}
                            />
                            <label htmlFor="asc"> Más reciente</label>
                        </div>
                        <div className="filter__item">
                            <input
                                type="radio"
                                value="desc"
                                id="desc"
                                checked={selected === 'desc'}
                                onClick={() => selectRadio('desc')}
                            />
                            <label htmlFor="desc"> Más antigua</label>
                        </div>
                    </div>
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
                                        <option>País</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Venezuela">Venezuela</option>
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
                                        <option>Ciudad</option>
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