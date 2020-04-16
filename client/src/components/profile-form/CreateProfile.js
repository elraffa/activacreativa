import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    bio: '',
    githubusername: '',
    youtube: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    instagram
  } = FormData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Crear Perfil</h1>
      <p className='lead'>
        <i className='fas fa-user-md'></i>
        Ingresá tus datos para tu Perfil
      </p>
      <small>* = requerido</small>
      <form action='' className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select
            name='status'
            id=''
            value={status}
            onChange={e => onChange(e)}
          >
            <option value='0'>Seleccione su Título Profesional</option>
            <option value='Cardiologo'>Cardiólogo</option>
            <option value='Electrofisiologo'>Electrofisiólogo</option>
            <option value='Tecnico'>Técnico</option>
            <option value='Enfermero'>Enfermero</option>
            <option value='Otro'>Otro</option>
          </select>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Institución'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Ingrese el nombre de la Institución para la que trabaja
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Sitio Web'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Skills'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Una biografía corta'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className='form-text'>Contanos un poco sobre vos</small>
        </div>
        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Agregar Links de Redes Sociales
          </button>
          <span>Opcional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Volver
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
