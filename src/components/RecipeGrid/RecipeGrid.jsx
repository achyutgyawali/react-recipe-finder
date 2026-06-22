import { RecipeCard } from "../RecipeCard/RecipeCard";
import "./RecipeGrid.css";

export function RecipeGrid({ recipes, placeholder }) {
  return (
    <div className="recipe-grid">
      {recipes.length ? (
        recipes.map((hit, index) => (
          <RecipeCard key={index} recipeObj={hit.recipe} />
        ))
      ) : (
        <div className="grid-placeholder">{placeholder}</div>
      )}
    </div>
  );
}