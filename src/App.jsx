import React from 'react'
import './css/App.css'
import NavBar from './components/navBar'
import Home from './pages/home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RecipeDetails from './pages/recipeDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main className="main-content">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipeDetails/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
