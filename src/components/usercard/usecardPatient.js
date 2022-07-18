import React, { useEffect, useState } from 'react';
import '../../css/usercard/UserCard.css';

const UserCardPatient = (props) => {
	const [pacientes, setpaciente] = useState([]);

	const getPaciente = async () => {
		try {
			const response = await fetch(`http://localhost:5000/medicos/${props.props.props.id_pac}`);
			const jsonData = await response.json();
			setpaciente(jsonData);

		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getPaciente();
	}, []);

	return (
		<div className='pt-3'>
			<div className='profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden'>
				<div className='banner'></div>
				<img src={require(`../../img/usercard/${props.props.id_pac}.jpg`)} alt='Foto de Perfil' className='img-circle mx-auto mb-3' />
				<h3 className='mb-4'>{pacientes.nombre} {pacientes.apellido}</h3>
				<div className='text-left mb-4'>
					<p className='mb-2'><i className='fa fa-user-md mr-2'></i> {pacientes.edad}</p>
					<p className='mb-2'><i className='fa fa-address-card mr-2'></i> {pacientes.genero}</p>
					<p className='mb-2'><i className='fa fa-envelope mr-2'></i> {pacientes.direccion}</p>
					<p className='mb-2'><i className='fa fa-phone mr-2'></i> {pacientes.telefono}</p>
					<p className='mb-2'><i className='fa fa-globe mr-2'></i> {pacientes.emal}</p>
				</div>
			</div>
		</div>
	);
};

export default UserCardPatient;