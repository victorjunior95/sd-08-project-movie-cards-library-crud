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
      <Route exact path="/" render={ () => <MovieList /> } />
      <Route exact path="/movies/:id" render={ () => <MovieDetails /> } />
      <Route exact path="/movies/new" render={ () => <NewMovie /> } />
      <Route exact path="/movies/:id/edit" render={ () => <EditMovie /> } />
      <Route component={ NotFound } />

    </BrowserRouter>
  );
}

export default App;
