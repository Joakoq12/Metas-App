
import './App.css';
import Encabezamiento from './components/compartidos/header'
import Principal from './components/compartidos/principal'
import Footer from './components/compartidos/footer';

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

