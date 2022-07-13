import React from 'react';
import NewAppointment from '../appointment/NewAppointment.js';
import PacientData from './PacientData.js';
import PacientAppointments from './PacientAppointments.js';
import '../../css/consulting/ConsultingFrame.css';


const Consulting = (props) => {
  return (
    <div className='layout-specing'>
      <div className='row'>
        <div className='d-md-flex justify-content-between'>
          <div className='col-xl-9 col-lg-6 col-md-4'>
            <h5 className='mb-0'>Consulta</h5>
            <nav className='d-inline-block mt-2'>
              <ul className='breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0'>
                <li className='breadcrumb-item'><a>Página Principal</a></li>
                <li className='breadcrumb-item active'>Consulta</li>
              </ul>
            </nav>
          </div>
          <div className='mt-4 mt-sm-0'>
            <div className='d-grid'>
              <a><NewAppointment /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='layout-specing mt-3'>
        <div className='row'>
          <div className='col-md-4'>
            <h5>Datos Personales</h5>
            <PacientData props={props} />
          </div>
          <div className='col-md-8'>
            <h5>Historia Clínica</h5>
            <PacientAppointments props={props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;