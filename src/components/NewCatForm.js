import React, { useState } from "react";

const kInitialFormData = {
  name: '',
  color: '',
  personality: '',
};

const NewCatForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState(kInitialFormData);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData(prev => ({
      ...prev, [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // function passed as a prop that will call the API
    handleSubmit({ ...formData });
    // clear input field
    setFormData(kInitialFormData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Cat name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="color">Cat color:</label>
      <input
        type="text"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="personality">Cat personality:</label>
      <input
        type="text"
        id="personality"
        name="personality"
        value={formData.personality}
        onChange={handleChange}
      />
      <input type="submit" value="Add a cat" />
    </form>
  );
};

export default NewCatForm;
