
import { useContext } from 'react';
import {Contexto} from '../../components/servicios/Memoria'
import Meta from './Meta';






function Lista() {

    const metas = useContext(Contexto);
    console.log(metas) 

    return (

        metas.map(meta => <Meta key={meta.id} {...meta}></Meta>)

    );
}


export default Lista;