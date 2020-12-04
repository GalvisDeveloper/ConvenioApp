

export const getInstituciones = async (institution) => {

    const url = '';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const inst = data.map(datos => {
        return {

        }
    });
    return inst;
}