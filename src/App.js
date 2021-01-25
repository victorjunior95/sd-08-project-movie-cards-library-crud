import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { MovieList,
  MovieDetails,
  NewMovie,
  EditMovie,
  NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" render={ () => <MovieList /> } />
      <Route path="/movies/:id" render={ () => <MovieDetails /> } />
      <Route path="/movies/new" render={ () => <NewMovie /> } />
      <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
      <Route path="" component={ NotFound } />

    </BrowserRouter>
  );
}

export default App;
