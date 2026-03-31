import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { doc, setDoc, deleteDoc, collection, onSnapshot } from "firebase/firestore";

export function useFavorites(user) {
  const [favorites, setFavorites] = useState([]);
  const [favIds, setFavIds] = useState(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      setFavIds(new Set());
      setLoading(false);
      return;
    }

    const colRef = collection(db, "users", user.uid, "favorites");
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const recipes = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setFavorites(recipes);
      setFavIds(new Set(recipes.map((r) => String(r.id))));
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const toggleFavorite = (recipe) => {
    if (!user) return;
    const ref = doc(db, "users", user.uid, "favorites", String(recipe.id));
    if (favIds.has(String(recipe.id))) {
      deleteDoc(ref);
    } else {
      setDoc(ref, {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image ?? `https://img.spoonacular.com/recipes/${recipe.id}-312x231.jpg`,
      });
    }
  };

  return { favorites, favIds, loading, toggleFavorite };
}
