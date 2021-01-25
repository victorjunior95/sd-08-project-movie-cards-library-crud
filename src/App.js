import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ MovieList } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route path="*" component={ NotFound } />
      <div>Movie Card Library CRUD</div>
    </BrowserRouter>
  );
}

export default App;
// - a rota `/` deve renderizar MovieList
// - a rota `/movies/:id` deve renderizar MovieDetails
// - a rota `/movies/new` deve renderizar NewMovie
// - a rota `/movies/:id/edit` deve renderizar EditMovie
// - qualquer rota não declarada deve renderizar NotFound
