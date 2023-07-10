import { PokedexPage } from "./pages/PokedexPage";
import { PokemonDetailPage } from './pages/PokemonDetailPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PokedexPage />}></Route>
          <Route path="/detail" element={<PokemonDetailPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
