import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route path="/" component={ MovieList } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route path="" component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
