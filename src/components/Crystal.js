import React from 'react';
import PropTypes from 'prop-types';

const Crystal = ({ name, color, powers }) => {
  const [chargeCount, setChargeCount] = React.useState(0)


  const increaseCharge = () => {
    // console.log('clicked')
    setChargeCount(chargeCount + 1)
    // console.log(setCharge(charge + 1))
  }
  
  return (
    <>
      <h2>{name}</h2>
      <p>{color}</p>
      <p>{powers}</p>
      <button onClick={increaseCharge}>Charge Crystal</button>
      <p>You've charged {name} crystal {chargeCount} times!</p>
    </>
  );
};

Crystal.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  powers: PropTypes.string.isRequired,
};

export default Crystal;
