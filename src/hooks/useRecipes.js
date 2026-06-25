import { useState, useEffect } from "react";
import { fetchRecipes } from "../services/recipeApi";
import { useDebounce } from "./useDebounce";

export function useRecipes(query) {
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    if (!debouncedQuery) return;
    const load = async () => {
      setLoading(true);
      try {
        const hits = await fetchRecipes(debouncedQuery);
        setRecipeList(hits);
      } catch (err) {
        console.error("Failed to fetch recipes:", err);
      }
      setLoading(false);
    };
    load();
  }, [debouncedQuery]);

  return { recipeList, loading };
}