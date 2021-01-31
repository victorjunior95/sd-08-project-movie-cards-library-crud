import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import NewMovie from './pages/NewMovie';
import './App.css';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route
            exact
            path="/movies/:id"
            render={ (movieId) => <MovieDetails { ...movieId } /> }
          />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
