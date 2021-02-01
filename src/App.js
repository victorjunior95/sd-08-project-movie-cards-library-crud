import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, EditMovie, NotFound, NewMovie } from './pages';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Route path="/" component={ MovieList } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route path="" component={ NotFound } />
    </Router>
  );
}

export default App;
