import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { EditMovie, NewMovie, MovieDetails, MovieList, NotFound } from '../pages';

class Routes extends React.Component {
  render() {
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
}

export default Routes;
