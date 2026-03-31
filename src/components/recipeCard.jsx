// import "../css/MovieCard.css"
// import { useNavigate } from "react-router-dom";
// // import { useMovieContext } from "../constexts/MovieContext.jsx"


// function RecipeCard({ recipe }) {
//     const navigate = useNavigate();

// function showDetails() {
//     navigate(`/recipeDetails/${recipe.id}`);
// }

//   const ingredientNames = Array.isArray(recipe?.ingredients)
//     ? recipe.ingredients
//     : Array.isArray(recipe?.extendedIngredients)
//       ? recipe.extendedIngredients.map((i) => i?.name).filter(Boolean)
//       : [];

//   return (
//       <div className="movie-card">
//           <div className="movie-poster">
//               <img
//                   src={`https://img.spoonacular.com/recipes/${recipe?.id}-312x231.jpg`}
//                   alt={recipe?.title ?? "Recipeposter"}
//               />
//           </div>
//           <div className="movie-info">
//               <h3>{recipe?.title}</h3>
//               {ingredientNames.length > 0 ? <p>{ingredientNames}</p> : null}
//               <button 
//               className="details-button"
//                 onClick={showDetails}>
//                   Details
//               </button>
//           </div>
//       </div>
//   )
// }

// export default RecipeCard;

import "../css/MovieCard.css";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavouriteButton";

function RecipeCard({ recipe, user, favIds, toggleFavorite }) {
  const navigate = useNavigate();

  const ingredientNames = Array.isArray(recipe?.ingredients)
    ? recipe.ingredients
    : Array.isArray(recipe?.extendedIngredients)
      ? recipe.extendedIngredients.map((i) => i?.name).filter(Boolean)
      : [];

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://img.spoonacular.com/recipes/${recipe?.id}-312x231.jpg`}
          alt={recipe?.title ?? "Recipe poster"}
        />
      </div>
      <div className="movie-info">
        <h3>{recipe?.title}</h3>
        {ingredientNames.length > 0 && <p>{ingredientNames.join(", ")}</p>}
        <div className="card-actions">
          <button
            className="details-button"
            onClick={() => navigate(`/recipeDetails/${recipe.id}`)}
          >
            Details
          </button>
          <FavoriteButton
            recipe={recipe}
            favIds={favIds}
            toggleFavorite={toggleFavorite}
            user={user}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;