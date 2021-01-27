import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route path="/:id" component={ NotFound } />
          <Route exact path="/" component={ MovieList } />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
