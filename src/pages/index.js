import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import NewMovie from './NewMovie';
import EditMovie from './EditMovie';
import NotFound from './NotFound';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
export { default as EditMovie } from './EditMovie';
export { default as MovieDetails } from './MovieDetails';
export { default as MovieList } from './MovieList';
export { default as NewMovie } from './NewMovie';
export { default as NotFound } from './NotFound';
