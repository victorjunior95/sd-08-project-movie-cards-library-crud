import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {
  MovieList,
  MovieDetails,
  NewMovie,
  NotFound,
  EditMovie,
} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route path="/" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
