import React, { useState } from "react";

export const GifExpertApp = () => {
  // Isn't recommendable to condition a hook

  const [categories, setCategories] = useState(["One Piece", "Pokémon"]);

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>
      {/* Input */}

      {/* Gif list */}
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
