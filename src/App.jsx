// import React from 'react'
// import './css/App.css'
// import NavBar from './components/navBar'
// import Home from './pages/home'
// import Login from './pages/login'
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import RecipeDetails from './pages/recipeDetails'

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//         <main className="main-content">
//           <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/recipeDetails/:id" element={<RecipeDetails />} />
//           <Route path="/login" element={<Login />} />
//           </Routes>
//         </main>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react'
import './css/App.css'
import NavBar from './components/navBar'
import Home from './pages/home'
import FavoritesPage from './pages/favoritesPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RecipeDetails from './pages/recipeDetails'
import { auth } from './services/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useFavorites } from './hooks/useFavorites'

function App() {
  const [user, setUser] = useState(null);
  const { favorites, favIds, loading: favLoading, toggleFavorite } = useFavorites(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ?? null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <NavBar user={user} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <Home user={user} favIds={favIds} toggleFavorite={toggleFavorite} />
          } />
          <Route path="/recipeDetails/:id" element={
            <RecipeDetails user={user} favIds={favIds} toggleFavorite={toggleFavorite} />
          } />
          <Route path="/favorites" element={
            <FavoritesPage
              favorites={favorites}
              loading={favLoading}
              user={user}
              favIds={favIds}
              toggleFavorite={toggleFavorite}
            />
          } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;