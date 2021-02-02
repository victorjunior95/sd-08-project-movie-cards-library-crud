import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/" component={ MovieList } exact />
        <Route path="/movies/new" component={ NewMovie } exact />
        <Route path="/movies/:id" component={ MovieDetails } exact />
        <Route path="/movies/:id/edit" component={ EditMovie } exact />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
