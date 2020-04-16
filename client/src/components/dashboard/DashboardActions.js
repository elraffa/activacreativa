import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to='/edit-profile' class='btn'>
        <i class='fas fa-circle text-primary'></i> Editar Perfil
      </Link>
      <Link to='/add-experience' class='btn'>
        <i class='fab fa-black-tie text-primary'></i> Agregar Experiencia
        Laboral
      </Link>
      <Link to='/add-education' class='btn'>
        <i class='fas fa-graduation-cap text-primary'></i> Agregar Formación
      </Link>
    </div>
  );
};

export default DashboardActions;
