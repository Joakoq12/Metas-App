
import estilos from './Principal.module.css';
import Vinculo from './vinculo';
import { ReactComponent as Lista } from '../img/lista.svg';
import { ReactComponent as Nueva } from '../img/nueva.svg';


function Principal({children}) {
  return (

  <div className={estilos.principal}>
 <aside className={estilos.aside}> 

    <Vinculo 
    href='/lista' 
    text='Lista de Metas'
    Icono={Lista} />
      
      
    <Vinculo 
    href='/crear' 
    text='Nuevas Metas'
    Icono={Nueva}
    
    />
  
 </aside>
 <main className={estilos.main}>
    {children}
 </main>
</div>


  );
}

export default Principal;