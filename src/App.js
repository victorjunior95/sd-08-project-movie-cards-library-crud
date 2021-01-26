import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Movielist from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Route exact Path="/" component={ Movielist } />
      <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
      <Route component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
