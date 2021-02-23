import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  EditMovie,
  MovieDetails,
  MovieList,
  NewMovie,
  NotFound,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/new" render={ (props) => <NewMovie { ...props } /> } />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route exact path="/" render={ (props) => <MovieList { ...props } /> } />
        <Route render={ () => <NotFound /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
