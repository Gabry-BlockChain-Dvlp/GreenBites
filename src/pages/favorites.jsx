import { useState } from "react";
import RecipeCard from "../components/recipeCard";
import "../css/Favorites.css";

function Favorite() {
    const [favorites] = useState(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        return Array.isArray(storedFavorites) ? storedFavorites : [];
    });

    const hasFavorites = favorites && favorites.length > 0;

    if (!hasFavorites) {
        return (
            <div className="favorites-empty">
                <h2>No Favorites Yet</h2>
                <p>Add favorite recipes to see them here</p>
            </div>
        );
    }

    return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorites.map((recipe) => (
                    <RecipeCard recipe={recipe} key={recipe.id} />
                ))}
            </div>
        </div>
    );
}

export default Favorite;