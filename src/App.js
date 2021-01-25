import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import MovieList from './pages/MovieList';
import { MovieDetails, NewMovie, EditMovie } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/:id:edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        {/* <Route exact path="/" render={ () => new MovieList() } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
