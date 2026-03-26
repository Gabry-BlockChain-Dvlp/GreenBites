import { useState, useEffect } from "react";
import { searchRecipes, getRandomRecipes } from "../services/api";
import "../css/Home.css";
import RecipeCard from "../components/recipeCard";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const loadRandomRecepies = async () => {
            try {
                const RandomRecepies = await getRandomRecipes();
                setRecipes(RandomRecepies);
            } catch (error) {
                setError(error.message);
                setError("Failed to load random recipes. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        loadRandomRecepies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        try {
            const searchResults = await searchRecipes(searchQuery);
            setRecipes(searchResults);
        } catch (error) {
            setError(error.message);
            setError("Failed to search recipes. Please try again later.");
        } finally {
            setLoading(false);
        }

        setSearchQuery("");
    };


    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    className="search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for recipes..."
                />
                <button className="search-button" type="submit" disabled={loading}>
                    Search
                </button>
            </form>
            {error && <p className="error">{error}</p>}
            {loading ? (
                <p className="loading">Loading...</p>
            ) : (
                <div className="movies-grid">
                    {(Array.isArray(recipes) ? recipes : []).map((recipe) => (
                        (recipe?.title ?? "").toLowerCase().startsWith(searchQuery.toLowerCase()) && 
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            )}


        </div>
    );
}

export default Home;
