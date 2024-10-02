import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

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
      <AddCategory setCategories={setCategories} />
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
