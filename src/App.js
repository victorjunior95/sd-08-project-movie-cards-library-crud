import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <>
      <h1> Eu estou aqui no App!</h1>
      <Router>
        <Switch>
          <Route path="/movies/:id/edit/" component={ EditMovie } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/" component={ MovieList } />
          <Route path="*" component={ NotFound } />

        </Switch>
      </Router>
    </>
  );
}

export default App;
