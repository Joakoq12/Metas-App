
import './Principal.css';
import Vinculo from './vinculo';
import { ReactComponent as Lista } from '../img/lista.svg';
import { ReactComponent as Nueva } from '../img/nueva.svg';


function Principal({children}) {
  return (

  <div className='principal'>
 <aside className='aside'>

    <Vinculo href='/lista' text='Lista de Metas'>
      <Lista className='icono'></Lista>
        

    </Vinculo>
    <Vinculo href='/crear' text='Nuevas Metas'>
      <Nueva className='icono'></Nueva>

    </Vinculo>
    
    

 
  
 </aside>
 <main className='main'>
    {children}
 </main>
</div>


  );
}

export default Principal;