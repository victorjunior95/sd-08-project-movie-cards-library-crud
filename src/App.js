import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Movielist from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route Path="/" component={ Movielist } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route Path="/" exact component={ Movielist } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
