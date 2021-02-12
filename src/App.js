import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NewMovie, EditMovie, MovieDetails, MovieList, NotFound } from './pages';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
