import clienteAxios from "../config/axios";

export const getOptions = async (pais, query) => {

        if (pais !== '') {

                const { data } = await clienteAxios.get(`/ciudad/${pais}/${query === '' ? 'A' : query}`);
                return data.map(({ _id, nombre }) => ({ value: _id, name: nombre }));
        }
        return [];
}

export const getPaises = async () => {

        const { data } = await clienteAxios.get(`/pais/list`);
        return data;
}