const { default: clienteAxios } = require("../config/axios");

export const reportarDesaparecido = async (desaparecido, photo) => {

    let data = new FormData();

    let {
        nombre1,
        apellido1,
        nombre2,
        apellido2,
        genero,
        fechaNacimiento,
        pais,
        departamento,
        ciudad,
        zipcode,
        fechad,
        craneo,
        rostro,
        cuello,
        ojos,
        cuerpo,
        labios,
        oreja,
        nariz,
        piel,
        cpiel,
        pigm,
        peso,
        cabello,
        ccabello,
        cojos,
        clabios,
        estatura,
        cdientes,
        descripcion,
        creador,
    } = desaparecido;

    data.append('nombre1', nombre1);
    data.append('apellido1', apellido1);
    data.append('nombre2', nombre2);
    data.append('apellido2', apellido2);
    data.append('genero', genero);
    data.append('fechaNacimiento', fechaNacimiento);
    data.append('pais', pais);
    data.append('departamento', departamento);
    data.append('ciudad', ciudad);
    data.append('zipcode', zipcode);
    data.append('fechad', fechad);
    data.append('craneo', craneo);
    data.append('rostro', rostro);
    data.append('cuello', cuello);
    data.append('ojos', ojos);
    data.append('cuerpo', cuerpo);
    data.append('labios', labios);
    data.append('oreja', oreja);
    data.append('nariz', nariz);
    data.append('piel', piel);
    data.append('cpiel', cpiel);
    data.append('pigm', pigm);
    data.append('peso', peso);
    data.append('cabello', cabello);
    data.append('ccabello', ccabello);
    data.append('cojos', cojos);
    data.append('clabios', clabios);
    data.append('estatura', estatura);
    data.append('cdientes', cdientes);
    data.append('descripcion', descripcion);
    data.append('photo', photo);
    data.append('creador', creador);

    const response = await clienteAxios.post('/api/desaparecido/create', data);

    if (response.data.error) return false;
    return true;
}

export const actualizarDesaparecido = async (desaparecido, photo) => {

    let data = new FormData();

    let {
        _id,
        nombre1,
        apellido1,
        nombre2,
        apellido2,
        genero,
        fechaNacimiento,
        pais,
        departamento,
        ciudad,
        zipcode,
        fechad,
        craneo,
        rostro,
        cuello,
        ojos,
        cuerpo,
        labios,
        oreja,
        nariz,
        piel,
        cpiel,
        pigm,
        peso,
        cabello,
        ccabello,
        cojos,
        clabios,
        estatura,
        cdientes,
        descripcion,
        creador,
    } = desaparecido;
    
    data.append('_id', _id);
    data.append('nombre1', nombre1);
    data.append('apellido1', apellido1);
    data.append('nombre2', nombre2);
    data.append('apellido2', apellido2);
    data.append('genero', genero);
    data.append('fechaNacimiento', fechaNacimiento);
    data.append('pais', pais);
    data.append('departamento', departamento);
    data.append('ciudad', ciudad);
    data.append('zipcode', zipcode);
    data.append('fechad', fechad);
    data.append('craneo', craneo);
    data.append('rostro', rostro);
    data.append('cuello', cuello);
    data.append('ojos', ojos);
    data.append('cuerpo', cuerpo);
    data.append('labios', labios);
    data.append('oreja', oreja);
    data.append('nariz', nariz);
    data.append('piel', piel);
    data.append('cpiel', cpiel);
    data.append('pigm', pigm);
    data.append('peso', peso);
    data.append('cabello', cabello);
    data.append('ccabello', ccabello);
    data.append('cojos', cojos);
    data.append('clabios', clabios);
    data.append('estatura', estatura);
    data.append('cdientes', cdientes);
    data.append('descripcion', descripcion);
    console.log(photo);
    if(photo!==undefined)data.append('photo', photo);
    data.append('creador', creador);

    const response = await clienteAxios.put('/api/desaparecido/update', data);

    if (response.data.error) return false;
    return true;
}

export const listarDesaparecido = async () => {

    const response = await clienteAxios.get('/api/desaparecido/list');
    return response.data.map(d=>{
        const nombre = `${d.nombre1} ${d.nombre2} ${d.apellido1} ${d.apellido2}`;
        return {
            ...d,
            nombre: nombre,
        }
    });
}

export const listarPublicaciones = async (id) => {

    const response = await clienteAxios.get('/api/desaparecido/list/'+id);
    return response.data.map(d=>{
        const nombre = `${d.nombre1} ${d.nombre2} ${d.apellido1} ${d.apellido2}`;
        return {
            ...d,
            nombre: nombre,
        }
    });
}

export const marcarEncontrado = async (id) => {

    const response = await clienteAxios.put('/api/desaparecido/estado/'+id);
    if (response.data.error) return false;
    return true; 
}