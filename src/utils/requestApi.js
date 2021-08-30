import { API } from "../config";
import clienteAxios from "../config/axios";

export const getOptions=async(pais, query)=> {

        const {data} = await clienteAxios.get(`${API}/ciudad/${pais}/${query===''?'A':query}`);
        
        return data.map(({ _id, nombre }) => ({ value: _id, name: nombre }));
}

export const getPaises = async()=>{

        const {data} = await clienteAxios.get(`${API}/pais/list`);
        return data;
}