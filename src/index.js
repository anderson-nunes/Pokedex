import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PokemonProvider from './contexts/PokemonContext'
import PokemonCardProvider from './contexts/PokemonCardContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokemonCardProvider>
    <PokemonProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PokemonProvider>
  </PokemonCardProvider>
);

