import React, { useState } from "react";

export const AddCategory = ({setCategories}) => {
  const [inputValue, setinputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories(cats=>[inputValue,...cats])
    setinputValue('');
  
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      ></input>
    </form>
  );
};
