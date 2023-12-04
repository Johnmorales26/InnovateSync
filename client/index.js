// cargando los estilos
/* eslint-disable no-console */
import './styles/style.css';
/* eslint-disable */
// Importando estilos de Materialize CSS
import 'materialize-css/dist/css/materialize.css';
// Importando scripts de Materialize
import 'materialize-css/dist/js/materialize';
// Script para borrar proyecto
import deleteBook from './domains/book.dashboard';

// Inicializando Scripts de Materialize para interactividad
M.AutoInit();

// Cargando script en caso de que la URL sea '/book'
if (window.location.pathname === '/book') {
  console.log('Script cargado correctamente');
  window.deleteBook = deleteBook;
}

console.log('Webpack Working Middleware!!! 📦');
