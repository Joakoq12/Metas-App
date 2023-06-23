
import { useContext, useEffect } from 'react';
import {Contexto} from '../../components/servicios/Memoria'
import Meta from './Meta';
import { Outlet } from 'react-router-dom';
import {pedirMetas} from '../servicios/Pedidos'







function Lista() {

    const [estado, dispatch] = useContext(Contexto);

    useEffect(()=> {
         const metas = pedirMetas();
         dispatch({tipo: 'colocar', metas})



    }, []);

    return ( 

        <>

        {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)}

        <Outlet></Outlet>

        </>
    );
}


export default Lista;