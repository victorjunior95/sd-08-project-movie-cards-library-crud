import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Movielist from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ Movielist } />
        <Route component={ NotFound } />
      </Switch>
      <div className="new-movie"><Link to="/movies/new">ADICIONAR CARTÃO</Link></div>
    </BrowserRouter>
  );
}

export default App;
