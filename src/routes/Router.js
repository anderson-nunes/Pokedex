import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonListPage } from '../pages/PokemonListPage'
import { PokemonDetailPage } from '../pages/PokemonDetailPage'
import { PokedexPage } from '../pages/PokedexPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonListPage />} />
        <Route path='/detailPage/:name/:types' element={<PokemonDetailPage />} />
        <Route path='/pokedexPage' element={<PokedexPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default Router
