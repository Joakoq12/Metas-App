import { createContext, useReducer } from "react";


const listaMock = [{
  'id': '1',
  'detalles': 'Correr por 30 minutos',
  'periodo': ' /semana',
  'eventos': 1,
  'icono': '🏃',
  'meta': 365,
  'plazo': '2030-01-01',
  'completado': 200,
},
{
  'id': '2',
  'detalles': 'Leer libros',
  'periodo': ' año',
  'eventos': 6,
  'icono': '📚',
  'meta': 5,
  'plazo': '2030-01-01',
  'completado': 5,
},
{
  'id': '3',
  'detalles': 'Viajar parques nacionales',
  'periodo': ' mes ',
  'eventos': 1,
  'icono': '✈️',
  'meta': 365,
  'plazo': '2030-01-01',
  'completado': 40,
}];

const estadoInicial = {
  orden: [],
  objeto: {},

};

function reductor(estado, accion) {
  switch (accion.tipo) {
    case 'colocar': {
      const metas = accion.metas;
      const nuevoEstado = {
        orden: metas.map(meta => meta.id),
        objetos: metas.reduce((objeto, meta) => ({ ...objeto, [meta.id]: meta }), {})
      }
      return nuevoEstado;

    };

    case 'crear': {
      const id = Math.random();
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
      return nuevoEstado;
    }
  }}




  export const Contexto = createContext(null);

  const metas = reductor(estadoInicial, { tipo: 'colocar', metas: listaMock })



  function Memoria({ children }) {
    const [estado, dispatch] = useReducer(reductor, metas);
    return (
      <Contexto.Provider value={[estado, dispatch]}>
        {children}

      </Contexto.Provider>
    );
  }

  export default Memoria;


