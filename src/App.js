import React from 'react';

import MovieList from './pages/MovieList'
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/:id/:edit" component={ EditMovie } />
        <Route path="/*" component={ NotFound }></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
