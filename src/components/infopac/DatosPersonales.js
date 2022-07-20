import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const DatosPersonales = _ => {
  return(
    <div class="col-md-7">
      <h3>Datos Personales:</h3>
      <ul class="list-group list-group-flush border border-success">
        <li class="list-group-item"><span class="fw-bold">Edad: </span><span>22</span></li>
        <li class="list-group-item"><span class="fw-bold">Correo: </span><span>Correo: correo@prueba.com</span></li>
        <li class="list-group-item"><span class="fw-bold">Celular: </span><span>987654321</span></li>
        <li class="list-group-item"><span class="fw-bold">Dirección: </span><span>Av. LasManzanas 123</span></li>
        <li class="list-group-item"><span class="fw-bold">DNI: </span><span>79846512</span></li>
      </ul>
    </div>
  );
}

export default DatosPersonales;