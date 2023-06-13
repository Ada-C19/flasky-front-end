import React from 'react';
import Crystal from './Crystal';
import PropTypes from 'prop-types';

const CrystalList = ({ crystals }) => {
  const crystalComponents = crystals.map((crystal, index) => {
    return (
      <li key={index}>
        <Crystal
          id={crystal.id}
          name={crystal.name}
          color={crystal.color}
          powers={crystal.powers}
        />
      </li>
    );
  });

  return (
    <section>
      <h2>Crystal List</h2>
      <ul>{crystalComponents}</ul>
    </section>
  );
};

CrystalList.propTypes = {
  crystals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      powers: PropTypes.string.isRequired,
    })
  ),
};
export default CrystalList;
