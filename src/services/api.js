
const BASE_URL = "https://api.spoonacular.com/recipes"
const API_KEY = "28e9f3689c984439b2a58281ac6c4048"

export const getRandomRecipes = async () => {
   const response = await fetch(`${BASE_URL}/random?apiKey=${API_KEY}`);
   const data = await response.json();
   return data.recipes ?? [];
};

export const searchRecipes = async (query) => {
    const response = await fetch(`${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results ?? [];
}

