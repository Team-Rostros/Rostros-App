import React, { useState } from 'react';

// Assets
import filter from '../../img/filter.png';

const FilterASCDESC = ({
    setList
}) => {
    const [selected, setSelected] = useState('asc');

    const selectRadio = (value) => {
        setSelected(value);
        setList(c => [...c].reverse());
    }
    return (
            <>

                <img className="filter__img" src={filter} alt="Filtrar" />

                <div className="filter__section_1">
                    <div className="filter__item">
                        <input
                            type="radio"
                            value="asc"
                            id="asc"
                            checked={selected === 'asc'}
                            onClick={() => selectRadio('asc')}
                            onChange={() => { }}
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
                            onChange={() => { }}
                        />
                        <label htmlFor="desc"> Más antigua</label>
                    </div>
                </div>
            </>
    );
}

export default FilterASCDESC;