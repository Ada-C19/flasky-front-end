import React from 'react';
import PropTypes from 'prop-types';

const Crystal = ({ id, name, color, powers, charges, increaseCharge, removeCrystal }) => {
  // const [chargeCount, setChargeCount] = React.useState(0)


  // const increaseCharge = () => {
  //   // console.log('clicked')
  //   setChargeCount(chargeCount + 1)
  //   // console.log(setCharge(charge + 1))
  // }
  
  return (
    <>
      <h2>{name}</h2>
      <p>{color}</p>
      <p>{powers}</p>
      <button onClick={() => increaseCharge(id)}>Charge Crystal</button>
      <p>You've charged {name} crystal {charges} times!</p>
      <button onClick={() => removeCrystal(id)}>Remove Crystal</button>
    </>
  );
};

Crystal.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  powers: PropTypes.string.isRequired,
  charges: PropTypes.number.isRequired,
  removeCrystal: PropTypes.func.isRequired,
  increaseCharge: PropTypes.func.isRequired
};

export default Crystal;
