// Bibliotecas React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ MovieList } />
        <Route path="/movies/:id" exact component={ MovieDetails } />
      </Switch>
    </Router>
  );
}
