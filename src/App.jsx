import React from 'react'
import './css/App.css'
import NavBar from './components/navBar'
import Home from './pages/home'

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Home />
      </main>
    </>
  )
}

export default App
