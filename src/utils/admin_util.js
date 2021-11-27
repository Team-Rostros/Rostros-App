const { default: clienteAxios } = require("../config/axios");

export const listarComentario = async () => {
    const response = await clienteAxios.get('/api/comentarios/list');
    return response.data;
}

export const eliminarComentario = async (id) => {
    const response = await clienteAxios.delete('/api/comentarios/'+ id);
    return response.data;
}

export const eliminarDesaparecido = async (id) => {
    const response = await clienteAxios.delete('/api/desaparecido/'+ id);
    return response.data;
}