import React, {useState} from "react";
import PropTypes from "prop-types";

const Cat = (props) => {
  // const [petCount, setPetCount] = useState(0);

  // const increasePets = () => {
  //   setPetCount((petCount) => petCount + 1)
  // }

  return (
    <li>
      <h3>Name: {props.name}</h3>
      <h3>Id: {props.id}</h3>
      <h3>Caretaker: {props.caretaker}</h3>
      <h3>Color: {props.color}</h3>
      <h3>Personality: {props.personality}</h3>
      <h3># Pets: {props.petCount}</h3>
      <button onClick = {() => props.onPetCat(props.id)}>Pet Cat</button>
    </li>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  caretaker: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  petCount: PropTypes.number.isRequired,
  onPetCat: PropTypes.func.isRequired,
};

export default Cat;
