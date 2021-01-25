import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>
        Movie Card Library CRUD
        <Switch>
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/" component={ MovieList } />
          <Route path="" exact component={ NotFound } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
