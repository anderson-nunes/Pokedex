import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PokemonProvider from './contexts/PokemonContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokemonProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PokemonProvider>
);

