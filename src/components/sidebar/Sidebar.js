import React from 'react';
import '../../css/sidebar/Sidebar.css';

const Sidebar = () => {
  return (
    <div>
      <nav id='sidebarMenu' className='collapse d-lg-block sidebar collapse bg-white'>
        <div className='position-sticky'>
          <div className='list-group list-group-flush mx-3 mt-4'>
            <a href='http://localhost:3000/appointments' className='list-group-item list-group-item-action py-2 ripple'>
              <i className='fas fa-calendar-alt fa-fw me-3'></i><span>Citas</span></a>
            <a href='http://localhost:3000/consulting' className='list-group-item list-group-item-action py-2 ripple'>
              <i className='fas fa-clipboard-user fa-fw me-3'></i><span>Pacientes</span></a>
            <a href='http://localhost:3000/messaging' className='list-group-item list-group-item-action py-2 ripple'>
              <i className='fas fa-comment-medical fa-fw me-3'></i><span>Mensajes</span></a>
            <a href='http://localhost:3000/reviews' className='list-group-item list-group-item-action py-2 ripple'>
              <i className='fas fa-heart fa-fw me-3'></i><span>Comentarios</span></a>
            <a href='' className='list-group-item list-group-item-action py-2 ripple'>
              <i className='fas fa-lock fa-fw me-3'></i><span>Salir</span></a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;