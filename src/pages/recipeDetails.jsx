import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../services/api";
import FavoriteButton from "../components/FavouriteButton";
import "../css/RecipeDetails.css";

function RecipeDetails({ user, favIds, toggleFavorite }) {
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
             <FavoriteButton
          recipe={recipe}
          favIds={favIds}
          toggleFavorite={toggleFavorite}
          user={user}
        />
      </div>
      <div className="recipe-info">
        <h1>{recipe.title}</h1>
        {recipe.extendedIngredients ? (
          <div>
            <h3>Ingredients:</h3>
            <ul className="ingredients-list">
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.name}  {ingredient.amount}  {ingredient.unit}</li>
              ))}
            </ul>
          </div>
        ) : null}
      <p>{recipe.instructions}</p>
      <h3>Health Score: {recipe.healthScore}</h3>
      </div>
      <h3 className="summary">Summary:</h3>
      {recipe.summary ? (
        <div className="recipe-summary" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      ) : null}
    </div>
  );
}

export default RecipeDetails;