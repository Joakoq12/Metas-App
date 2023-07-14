
import React from 'react';
import Meta from './Meta';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Contexto } from '../servicios/Memoria';





function Lista() {
    const [metas] = useContext(Contexto);
  
    return (
      <>
        {metas.orden.map((id) => (
          <Meta key={id} {...metas.objetos[id]}></Meta>
        ))}
        <Outlet />
      </>
    );
  }
  
  export default Lista;