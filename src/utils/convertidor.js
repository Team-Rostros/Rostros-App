export const calcularEdad = (fecha) => {

    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

export const extraerFecha = (fecha) => {
    const date = new Date(fecha);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

export const extraerTiempo = (fecha) => {
    const date = new Date(fecha);
    return `${date.getTime()-Date.now()}`;
}