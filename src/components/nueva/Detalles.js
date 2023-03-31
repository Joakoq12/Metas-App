import estilos from './Detalles.module.css'



function Detalles() {

    const opcionesDeFrencuencia = ['dia', 'semana', 'mes', 'año'];

    const emoji = ['✈️, 📚, 🏃, 💰, 🖥️ '];

    return (

        <div className="tarjeta text-left">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input className="input" placeholder="ej.52 caminatas">
                    </input>
                </label>

                <label className="label">
                    ¿ Con que frecuencia deseas cumplir tu meta ?
                    <span>ej. 1 vez a la semana</span>
                    <div className='flex mb-6'>
                        <input className="input mr-6" type='number'></input>
                        <select className="input">
                            {opcionesDeFrencuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select> </div>
                </label>

                <label className="label">
                    ¿Cuantas veces deseas completar esta meta?
                    <input className="input" type='number' placeholder='Insert a number'></input>
                </label>

                <label className="label">
                    ¿Tienes una fecha limite?
                    <input className='input' type='date'></input>
                </label>

                <label className='label'>
                ¿Cuantas veces has completado ya esta meta?
                <input className='input' type='number' placeholder='Insert a number'></input>
                </label>

                  
                <label className="label">Escoge un icono para la meta
                    <select className="input">
                    {emoji.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>

                </form>

                <div className={estilos.botones}>
                    <button className="boton boton--negro">Crear</button>
                    <button className="boton boton--gris">Cancelar</button>
                </div>












          
            <div></div>
        </div>




    );
}

export default Detalles;
