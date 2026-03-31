import "../css/FavoutiteButton.css";

function FavoriteButton({ recipe, favIds = new Set(), toggleFavorite, user }) {
  const isFav = favIds?.has(String(recipe.id));

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      alert("Effettua il login per salvare i preferiti.");
      return;
    }
    toggleFavorite(recipe);
  };

  return (
    <button
      className={`fav-button ${isFav ? "fav-active" : ""}`}
      onClick={handleClick}
      aria-label={isFav ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
    >
      {isFav ? "❤️" : "🤍"}
    </button>
  );
}

export default FavoriteButton;