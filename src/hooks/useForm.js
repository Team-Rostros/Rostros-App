import {useState} from 'react';
import { validateField } from '../utils/validator';

export const useForm = (initialState={}) => {
    const [value, setValue] = useState(initialState);

    const handleInputChange = (e, regExp)=>{
        const {target} = e;
        setValue({
            ...value,
            [target.name]:target.value
        });
        return validateField(target.value,regExp);
    }

    const cleanOBjects = (object)=>{
        setValue(object);
    }

    return [value, handleInputChange, cleanOBjects];
}
