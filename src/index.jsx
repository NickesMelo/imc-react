// /src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './GlobalStyles'; // Importa os estilos globais
import App from './routes'; // Importa o componente principal que define as rotas

createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles /> {/* Aplica os estilos globais */}
    <App /> {/* Renderiza o componente principal com o Router */}
  </>
);
