import React, { useState } from "react";

export const GifExpertApp = () => {
  // Isn't recommendable to condition a hook
  // Avoid mutations

  const [categories, setCategories] = useState(["One Piece", "Pokémon"]);

  const onAddCategory = () => {
    // setCategories(cat => [...categories, "Jojo's"]);
    setCategories(["Jojo's", ...categories]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>
      {/* Input */}

      {/* Gif list */}
      <button onClick={onAddCategory}>Add Category</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        {/* <li></li> */}
      </ol>
      {/* gifItem */}
    </>
  );
};
