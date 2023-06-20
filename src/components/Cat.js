import PropTypes from "prop-types";

const Cat = (props) => {
  const petCatWithId = (id) => {
    props.petCat(props.id);
  };

  return (
    <li>
      <h3>Name: {props.name}</h3>
      <h3>Id: {props.id}</h3>
      {/* <h3>Caretaker: {props.caretaker}</h3> */}
      <h3>Color: {props.color}</h3>
      <h3>Personality: {props.personality}</h3>
      <h3># Pets: {props.petCount}</h3>
      <button onClick={petCatWithId}>Pet Cat</button>
      {/* <button onClick={() => props.onUnregister(props.id)}>Delete Cat</button> */}
    </li>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  petCount: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  petCat: PropTypes.func.isRequired,
  // onUnregister: PropTypes.func.isRequired,
};

export default Cat;
