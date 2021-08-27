import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [value, setValue] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValue({
            ...value,
            [target.name]: target.value
        });
    }

    const cleanOBjects = (object) => {
        setValue(object);
    }

    const fillOBjects = (object) => {
        setValue({
            ...value,
            ...object
        });
    }

    return [value, handleInputChange, cleanOBjects, fillOBjects];
}