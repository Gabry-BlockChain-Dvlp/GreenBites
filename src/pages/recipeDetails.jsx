import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../services/api";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const details = await getRecipeDetails(id);
        if (!cancelled) setRecipe(details);
      } catch (e) {
        if (!cancelled) setError(e?.message ?? "Failed to load recipe details");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (id) load();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!recipe) return null;

  return (
    <div className="recipe-details">
      <div className="recipe-image">
        <img
          src={recipe.image ?? `https://img.spoonacular.com/recipes/${recipe.id}-312x231.jpg`}
          alt={recipe.title ?? "Recipe"}
        />
      </div>
      <h1>{recipe.title}</h1>
      {recipe.summary ? (
        <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      ) : null}
    </div>
  );
}

export default RecipeDetails;