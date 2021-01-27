import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/" component={ MovieList } />
          <Route component={ NotFound } />
        </Switch>
      </div>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
    </BrowserRouter>
  );
}

export default App;
