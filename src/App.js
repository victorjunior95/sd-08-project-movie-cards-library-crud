import React from 'react';
import { BrowserRouter as Router,
  Switch, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movie/:id/edit" component={ EditMovie } />
        <Route path="" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
