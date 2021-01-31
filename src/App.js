import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditMovie from './pages/EditMovie';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route
            path="/movies/:id"
            render={ (movieId) => <MovieDetails { ...movieId } /> }
          />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
