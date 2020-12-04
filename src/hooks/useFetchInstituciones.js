

import { useState } from 'react'
import { getInstituciones } from '../helpers/getInstituciones';

const useFetchInstituciones = (institucion) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getInstituciones(institucion)
            .then(datos => {
                setState({
                    data: datos,
                    loading: false
                });
            })
    }, [institucion]);

    return state;
}

export default useFetchInstituciones;