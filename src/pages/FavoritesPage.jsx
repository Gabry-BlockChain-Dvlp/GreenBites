import { useNavigate } from "react-router-dom";
import FavoriteButton from "../components/FavouriteButton";
import "../css/FavoritePage.css";

function FavoritesPage({ favorites, loading, user, favIds, toggleFavorite }) {
  const navigate = useNavigate();

  if (!user) return (
    <div className="favorites-empty">
      <p>Effettua il login per vedere i tuoi preferiti.</p>
      <button onClick={() => navigate("/")}>Torna alla Home</button>
    </div>
  );

  if (loading) return <p className="loading">Caricamento...</p>;

  if (favorites.length === 0) return (
    <div className="favorites-empty">
      <p>Non hai ancora salvato nessuna ricetta. 🌿</p>
      <button onClick={() => navigate("/")}>Scopri le ricette</button>
    </div>
  );

  return (
    <div className="favorites-page">
      <h1>I tuoi preferiti ❤️</h1>
      <div className="movies-grid">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="movie-card">
            <div className="movie-poster">
              <img
                src={recipe.image}
                alt={recipe.title}
              />
            </div>
            <div className="movie-info">
              <h3>{recipe.title}</h3>
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
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;