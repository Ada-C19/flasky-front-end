import React, { useState } from "react";

const NewCatForm = (props) => {
  const [catName, setCatName] = useState("");

  const handleNameChange = (event) => {
    setCatName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCat = {
      name: catName, 
      personality: '',
      color: '',
      pet_count: 0,
    }
    props.onHandleSubmit(newCat);
    setCatName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Cat Name: </label>
      <input type="text" id="name" name="name" onChange={handleNameChange} value={catName}></input>
      <div>
        <input type="submit" value="Add a Cat"></input>
      </div>
    </form>
  );
};

export default NewCatForm;