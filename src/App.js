import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Movielist from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route Path="/" component={Movielist} />
        <Route path="/movies/:id" render={(props) => <MovieDetails {...props}  /> } />
        <Route path="/movie/new" component={NewMovie} />
        <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props}  /> } />
        <Route Path="/" component={NotFound} />
      </switch>
    </BrowserRouter>
  );
}

export default App;
