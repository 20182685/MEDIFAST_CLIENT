import React from 'react';
import MedicalSearchList from './MedicalSearchList';

const MedicalSearchFrame = (props) => {
    return (
        <div className='layout-specing'>
            <div className='row'>
                <div className='col-xl-9 col-lg-6 col-md-4'>
                    <h5 className='mb-0'>Medicos</h5>
                    <nav className='d-inline-block mt-2'>
                        <ul className='breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0'>
                            <li className='breadcrumb-item'><a>Página Principal</a></li>
                            <li className='breadcrumb-item active'>Medicos</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                {<MedicalSearchList props={props} />}
            </div>
            <div className='row text-center'>
                <div className='col-12 mt-4'>
                    <div className='d-md-flex align-items-center text-center justify-content-between'>
                        <span className='text-muted me-3'>Mostrando 1 - 10 de 50</span>
                        <ul className='pagination justify-content-center mb-0 mt-3 mt-sm-0'>
                            <li className='page-item'><a className='page-link' href='javascript:void(0)'>Anterior</a></li>
                            <li className='page-item active'><a className='page-link' href='javascript:void(0)'>1</a></li>
                            <li className='page-item'><a className='page-link' href='javascript:void(0)'>2</a></li>
                            <li className='page-item'><a className='page-link' href='javascript:void(0)'>3</a></li>
                            <li className='page-item'><a className='page-link' href='javascript:void(0)'>Siguiente</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicalSearchFrame;