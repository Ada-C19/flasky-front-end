import React from 'react';
import './CrystalForm.css';
import PropTypes from 'prop-types';

const CrystalForm = ({ addCrystalCallback }) => {
  const [formFields, setFormFields] = React.useState({
    name: '',
    color: '',
    powers: '',
    charges: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    addCrystalCallback(formFields);

    setFormFields({
      name: '',
      color: '',
      powers: '',
      charges: 0,
    });
  };

  const handleChange = (evt) =>
    setFormFields({ ...formFields, [evt.target.name]: evt.target.value });

  return (
    <form onSubmit={handleSubmit} className='new_crystal_form'>
      <section>
        <h2>Add a Crystal</h2>
        <div className='new_crystal_fields'>
          <div>
            <label htmlFor='name'>Name: </label>
            <input
              name='name'
              value={formFields.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='color'>Color: </label>
            <input
              name='color'
              value={formFields.color}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='powers'>Powers: </label>
            <input
              name='powers'
              value={formFields.powers}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='charges'>Charges: </label>
            <input
              name='charges'
              value={formFields.charges}
              onChange={handleChange}
            />
          </div>
          <button
            className='button new_crystal_submit'
            type='submit'
            value='Add Crystal'
          >
            Add Crystal
          </button>
        </div>
      </section>
    </form>
  );
};

CrystalForm.propTypes = {
  addCrystalCallback: PropTypes.func.isRequired,
};

export default CrystalForm;
