import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Route path="/movies/new" component={ NewMovie } />
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="" component={ NotFound } />
    </Router>
  );
}

export default App;
