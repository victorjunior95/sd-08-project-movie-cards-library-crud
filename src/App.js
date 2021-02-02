import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Router>
          <Route path="/" component={ MovieList } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="*" component={ NotFound } />
        </Router>
      </Switch>
    </>
  );
}

export default App;
