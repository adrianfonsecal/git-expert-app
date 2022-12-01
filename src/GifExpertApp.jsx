import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Attack on Tittan"]);
  const [isUsed, setIsUsed] = useState(false)

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      setIsUsed(true);
      return;
    }
    setCategories([newCategory, ...categories]);
    setIsUsed(false);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {isUsed && (<div style={{color: "red"}}>Ups! ya buscaste eso, ingresa otra búsqueda.</div>)}
      {categories.map((item) => (
        <GifGrid key={item} category={item} />
      ))}
    </>
  );
};
