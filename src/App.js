import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <header className="movie-card-header">Movie Card Library CRUD</header>
      <Switch>
        <Route exact path="/movies/new"><NewMovie /></Route>
        <Route exact path="/movies/:id/edit"><EditMovie /></Route>
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route exact path="/"><MovieList /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
    </Router>
  );
}

export default App;
