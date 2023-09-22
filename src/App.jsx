import React from 'react'
import {Routes , Route} from 'react-router-dom'
import "./App.css"
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/pokedex' element={<PokedexPage />}/>
      </Routes>
    </div>
  )
}

export default App