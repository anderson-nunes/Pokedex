import { PokemonListPage } from './pages/PokemonListPage';
import { PokemonDetailPage } from './pages/PokemonDetailPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PokedexPage } from './pages/PokedexPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PokemonListPage />}></Route>
          <Route path="/detailPage" element={<PokemonDetailPage />}></Route>
          <Route path="/pokedexPage" element={<PokedexPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
