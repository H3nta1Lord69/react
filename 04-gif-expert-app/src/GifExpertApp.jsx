import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // Isn't recommendable to condition a hook
  // Avoid mutations

  const [categories, setCategories] = useState(["One Piece"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // setCategories(cat => [...categories, "Jojo's"]);
    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        // Emits something
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
