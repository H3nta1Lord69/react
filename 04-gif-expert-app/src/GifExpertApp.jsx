import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  // Isn't recommendable to condition a hook
  // Avoid mutations

  const [categories, setCategories] = useState(["One Piece", "Pokémon"]);

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return; 
    
    // setCategories(cat => [...categories, "Jojo's"]);
    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        // Emits something
        onNewCategory={(event) => onAddCategory(event)}
      />
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
