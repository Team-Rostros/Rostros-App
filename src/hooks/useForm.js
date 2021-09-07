import {useState} from 'react';

export const useForm = (initialState={}) => {
    const [value, setValue] = useState(initialState);

    const handleInputChange = (e)=>{
        const {target} = e;
        setValue({
            ...value,
            [target.name]:target.value
        });
    }

    const cleanOBjects = ()=>{
        setValue(initialState);
    }

    const fillOBjects = (object) => {
        setValue({
            ...value,
            ...object
        });
    }

    return [value, handleInputChange, cleanOBjects, fillOBjects];
}
