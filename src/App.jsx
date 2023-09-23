import React from 'react'
import {Routes , Route} from 'react-router-dom'
import "./App.css"
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokedexIDPage from './pages/PokedexIDPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<PokedexPage />}/>
          <Route path='/pokedex/:id' element={<PokedexIDPage />}/>          
        </Route>
      </Routes>
    </div>
  )
}

export default App