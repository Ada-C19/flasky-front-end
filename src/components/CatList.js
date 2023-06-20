import React from "react";
import Cat from "./Cat";
import PropTypes from "prop-types";

const CatList = ({ catData, petCat }) => {
  const getCatListJSX = (cats) => {
    return cats.map((cat) => {
      return (
        <Cat
          id={cat.id}
          name={cat.name}
          petCount={cat.petCount}
          color={cat.color}
          personality={cat.personality}
          key={cat.id}
          petCat={petCat}
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
      petCount: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      personality: PropTypes.string.isRequired,
    })
  ).isRequired,
  petCat: PropTypes.func.isRequired,
};

export default CatList;
