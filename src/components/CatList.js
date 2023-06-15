import React from "react";
import Cat from "./Cat";
import PropTypes from "prop-types";

const CatList = ({ catData, onPetCat }) => {
  const getCatListJSX = (cats) => {
    return cats.map((cat) => {
      return (
        <Cat
          id={cat.id}
          name={cat.name}
          caretaker={cat.caretaker}
          color={cat.color}
          personality={cat.personality}
          key={cat.id}
          petCount={cat.petCount}
          onPetCat={onPetCat}
        />
      );
    });
  };

  return (
    <div>
      <h2>Cat List Size: {catData.length}</h2>
      <ul>{getCatListJSX(catData)}</ul>
    </div>
  );
};

CatList.propTypes = {
  catData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      caretaker: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      personality: PropTypes.string.isRequired,
      petCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  onPetCat: PropTypes.func.isRequired,
};

export default CatList;
