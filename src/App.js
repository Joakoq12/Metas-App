
import './App.css';
import Encabezamiento from './components/compartidos/encabezamiento'
import Principal from './components/compartidos/principal'
import Footer from './components/compartidos/pie';


function App() {
  return (
    <div className="App">
        
        <Encabezamiento></Encabezamiento>
        <Principal></Principal>
        <Footer></Footer>
       
    </div>
  );
}



export default App;

