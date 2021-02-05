import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import DeleteMovie from './components/DeleteMovie';

function App() {
  return (
    <>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="/delete/:id" component={ DeleteMovie } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
