import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MovieList,
  MovieDetails,
  NewMovie,
  EditMovie,
  NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/new" render={ () => <NewMovie /> } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
