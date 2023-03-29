function Detalles() {

    const opcionesDeFrencuencia = ['dia', 'semana', 'mes', 'año'];

    const emoji = ['✈️, 📚, 🏃, 💰, 🖥️ ']

    return (

        <div>
            <form>
                <label>
                    Describe tu meta
                    <input placeholder="ej.52 caminatas">
                    </input>
                </label>

                <label>
                    ¿ Con que frecuencia deseas cumplir tu meta ?
                    <span>ej. 1 vez a la semana</span>
                    <div><input type='number'></input>
                        <select>
                            {opcionesDeFrencuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select> </div>
                </label>

                <label>
                    ¿Cuantas veces deseas completar esta meta?
                    <input type='number'></input>
                </label>

                <label>
                    ¿Tienes una fecha limite?
                    <input type='date'></input>
                </label>


                <label>Escoge un icono para la meta
                    <select>{emoji.map(seleccionar => <option value={seleccionar}>{seleccionar}</option>)}</select>
                </label>

                <div>
                    <button>Crear</button>
                    <button>Cancelar</button>
                    </div>












            </form>
            <div></div>
        </div>




    );
}

export default Detalles;
