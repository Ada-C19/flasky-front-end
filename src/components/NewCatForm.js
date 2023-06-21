import React, { useState } from "react";

const NewCatForm = ({ handleSubmit }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // function passed as a prop that will call the API
    const newCat = {
      name,
      color: '',
      personality: '',
      pet_count: 0,
    };
    handleSubmit(newCat);
    // clear input field
    setName("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Cat name:</label>
      <input
        type="text"
        id="name"
        name="catName"
        value={name}
        onChange={handleNameChange}
      />
      <input type="submit" value="Add a cat" />
    </form>
  );
};

export default NewCatForm;
