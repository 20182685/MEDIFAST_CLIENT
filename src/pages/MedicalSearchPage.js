import React from 'react';
import UserCardPacient from '../components/usercard/usecardPaciente.js';
import SidebarPatient from '../components/sidebar/sidebarPatient.js';
import MedicalSearchFrame from '../components/MedicalSearch/MedicalSearchFrame'
import 'bootstrap/dist/css/bootstrap.min.css';

const MedicalSearchPage = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <UserCardPacient props={props} />
          <SidebarPatient />
        </div>
        <div className='col-md-9 pt-3 pb-3'>
          <MedicalSearchFrame props={props} />
        </div>
      </div>
    </div>
  );
};

export default MedicalSearchPage;