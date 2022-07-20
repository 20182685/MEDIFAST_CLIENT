import NavBar from "../components/navbar/NavBar.js"
import Footer from '../components/footer/Footer.js';
import Historico from "../components/histconsult/Historico.js";
import '../App.css';


function HistoricoConsulta() {
  return (
    <div className="container">
      <NavBar/>
      <Historico/>
      <Footer />
    </div>
  );
}

export default HistoricoConsulta;