import { useState } from "react";
import { IngredientModal } from "../IngredientModal/IngredientModal";
import "./RecipeCard.css";

export function RecipeCard({ recipeObj }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <IngredientModal
          ingredients={recipeObj.ingredients}
          onSeeMore={() => window.open(recipeObj.url)}
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="recipe-card">
        <img className="recipe-image" src={recipeObj.image} alt={recipeObj.label} />
        <span className="recipe-name">{recipeObj.label}</span>
        <button className="recipe-btn" onClick={() => setShowModal(true)}>Ingredients</button>
        <button className="recipe-btn" onClick={() => window.open(recipeObj.url)}>See Complete Recipe</button>
      </div>
    </>
  );
}