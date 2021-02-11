import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/new" exact component={ NewMovie } />
        <Route path="/movies/:id/edit" exact component={ EditMovie } />
        <Route path="/movies/:id" exact component={ MovieDetails } />
        <Route path="/" exact component={ MovieList } />

        <Route path="/" component={ NotFound } />
        <Route path="/notfound" exact component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
