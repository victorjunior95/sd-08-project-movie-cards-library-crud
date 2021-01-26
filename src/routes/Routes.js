import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MovieDetails, MovieList, EditMovie, NotFound, NewMovie } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route component={ NotFound } />
    </Switch>
  );
}

export default Routes;
