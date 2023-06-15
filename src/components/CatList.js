import React from "react";

import Cat from "./Cat";
import PropTypes from "prop-types";

const CatList = (props) => {
  return (
    <section>
      <h2>Glaring size: {props.catData.length}</h2>
      <ul>
        {props.catData.map((cat) => (
          <Cat
            name={cat.name}
            personality={cat.personality}
            caretaker={cat.caretaker}
            color={cat.color}
            petCount={cat.petCount}
            onPetCat={props.onPetCat}
            id={cat.id}
            key={cat.id}
          />
        ))}
      </ul>
    </section>
  );
};

CatList.propTypes = {
  catData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      personality: PropTypes.string.isRequired,
      caretaker: PropTypes.string.isRequired,
    })
  ).isRequired,
  onPetCat: PropTypes.func.isRequired,
};

export default CatList;
