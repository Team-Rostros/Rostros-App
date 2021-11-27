const { default: clienteAxios } = require("../../config/axios");

export const recuperarPassword = async (email, password) => {
    const response = await clienteAxios.put('/api/usuarios/recuperar', {
        email, password,
    });
    return response.data;
}
