import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deleteCat, updateCatPets } from "../redux/cat-slice";

const Cat = (props) => {
  const dispatch = useDispatch();

  return (
    <li>
      <h3>Cat name: {props.name}</h3>
      <h3>Personality: {props.personality}</h3>
      <h3>Color: {props.color}</h3>
      <h3>Caretaker: {props.caretaker}</h3>
      <h3># Pets: {props.petCount}</h3>
      <button onClick={() => dispatch(updateCatPets(props.id))}>Pet Cat</button>
      <button onClick={() => dispatch(deleteCat(props.id))}>
        Remove Cat
      </button>
    </li>
  );
};

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  caretaker: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Cat;
