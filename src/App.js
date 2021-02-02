import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { EditMovie, NewMovie, MovieDetails, MovieList, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <h1>Movie Card Library CRUD</h1>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route path="*" component={ NotFound } />
      </Switch>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
    </BrowserRouter>
  );
}

export default App;
