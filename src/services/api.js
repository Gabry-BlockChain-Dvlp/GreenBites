
const BASE_URL = "https://api.spoonacular.com/recipes"
const API_KEY = "9742bf7163874428bf95891eaf21f71d"

export const getRandomRecipes = async () => {
   const response = await fetch(`${BASE_URL}/random?apiKey=${API_KEY}&number=1&include-tags=vegetarian`);
   const data = await response.json();
   return data.recipes ?? [];
};

export const searchRecipes = async (query) => {
    const response = await fetch(`${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${encodeURIComponent(query)}&diet=vegetarian&number=1`);
    const data = await response.json();
    return data.results ?? [];
}

export const getRecipeDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to load recipe details");
    return await response.json();
}
