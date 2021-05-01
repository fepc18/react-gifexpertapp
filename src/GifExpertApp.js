import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () => {
  //const categories = ["One Punch", "Dragon Ball", "Samurai X"];

  const [categories, setCategories] = useState([
    "One Punch",
    //"Dragon Ball",
    //"Samurai X",
  ]);

  const handleAdd = () => {
    // ([ "Naruto",...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category) => (
         // <li key={category}>{category}</li>
         <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ol>
    </>
  );
};
export default GifExpertApp;
