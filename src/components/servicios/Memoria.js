import React from "react";
import { createContext, useReducer } from "react";



// const memoria = localStorage.getItem('metas');
const estadoInicial =
 //  memoria 
   // ? JSON.parse(memoria)
   // :
{
  orden: [],
  objeto: {},

};

function reductor(estado, accion) {
  switch (accion.tipo) {
    case 'colocar': {
      const metas = accion.metas;
      const nuevoEstado = {
        orden: metas.map((meta) => meta.id),
        objetos: metas.reduce((objeto, meta) => ({ ...objeto, [meta.id]: meta }), {})
      };
      //localStorage.setItem('metas', JSON.stringify(nuevoEstado))
      return nuevoEstado;

    };

    case 'crear': {
      const id = String(Math.random());
      const nuevoEstado = {
        orden: [...estado.orden, id],
        objetos: {
          ...estado.objetos,
          [id]: accion.meta

        }

      };
      console.log(nuevoEstado)
      return nuevoEstado;
    };

    case 'actualizar': {
      const id = accion.meta.id;
      estado.objetos[id] = {
        ...estado.objetos[id],
        ...accion.meta
      };
      const nuevoEstado = { ...estado };
     // localStorage.setItem('metas', JSON.stringify(nuevoEstado))
      return nuevoEstado;

    }

    case 'borrar': {
      const id = accion.id;
      const nuevoOrden = estado.orden.filter((item) => item !== id);
      delete estado.objetos[id];
      const nuevoEstado = {
        orden: nuevoOrden,
        objetos: estado.objetos
      };
      //localStorage.setItem('metas', JSON.stringify(nuevoEstado))
      return nuevoEstado;
    };
    default : throw new Error ();
  }
}




export const Contexto = createContext(null);

 //reductor(estadoInicial, { tipo: 'colocar', metas: listaMock })



function Memoria({ children }) {
  const [estado, dispatch] = useReducer(reductor, estadoInicial);
  return (
    <Contexto.Provider value={[estado, dispatch]}>
      {children}

    </Contexto.Provider>
  );
}

export default Memoria;


