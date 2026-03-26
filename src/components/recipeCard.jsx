import "../css/MovieCard.css"
// import { useMovieContext } from "../constexts/MovieContext.jsx"


function RecipeCard({ recipe }) {

  return (
      <div className="movie-card">
          <div className="movie-poster">
              <img
                  src={`https://img.spoonacular.com/recipes/${recipe.id}-312x231.jpg`}
                  alt={recipe?.title ?? "Recipeposter"}
              />
          </div>
          <div className="movie-info">
              <h3>{recipe?.title}</h3>
              <p>{recipe?.ingredients?.join(", ")}</p>
          </div>
      </div>
  )
}

export default RecipeCard;