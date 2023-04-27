
import { useContext } from 'react';
import {Contexto} from '../../components/servicios/Memoria'
import Meta from './Meta';






function Lista() {

    const [estado, dispatch] = useContext(Contexto);
    //console.log(metas) 

    return ( 

        estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)

    );
}


export default Lista;