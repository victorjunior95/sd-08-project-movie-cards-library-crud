import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ MovieList } exact />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
