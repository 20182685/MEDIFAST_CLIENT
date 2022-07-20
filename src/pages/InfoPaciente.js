import NavbarSec from '../components/navbar/Navbarsec.js';
import DatosPersonales from '../components/infopac/DatosPersonales.js';
import Footer from '../components/footer/Footer.js';
import '../App.css';

function InfoPaciente(){
  return(
    <div className="App">
      <NavbarSec/>
      <DatosPersonales/>
      <Footer />
    </div>
  );
}

export default InfoPaciente