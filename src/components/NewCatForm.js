import React, { useState } from "react";

const NewCatForm = (props) => {
  // const [catName, setCatName] = useState("");
  const catDefaultState = {
    name: "",
    personality: "",
    color: "",
  };

  const [formData, setFormData] = useState(catDefaultState);
  

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = {...formData, [fieldName]: fieldValue};
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCat = {
      name: formData.name, 
      personality: formData.personality,
      color: formData.color,
      pet_count: 0,
    }
    props.onHandleSubmit(newCat);
    setFormData(catDefaultState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Cat Name: </label>
        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name}></input>
      </div>
      <div>
        <label htmlFor="personality"> Cat Personality: </label>
        <input type="text" id="personality" name="personality" onChange={handleChange} value={formData.personality}></input>
      </div>
      <div>
        <label htmlFor="color">Cat Color: </label>
        <input type="text" id="color" name="color" onChange={handleChange} value={formData.color}></input>
      </div>
      <div>
        <input type="submit" value="Add a Cat"></input>
      </div>
    </form>
  );
};

export default NewCatForm;