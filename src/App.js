import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import MovieList from './pages/MovieList';
// import MovieDetails from './pages/MovieDetails';
// import NewMovie from './pages/NewMovie';
// import EditMovie from './pages/EditMovie';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <MovieList />
      <BrowserRouter>
        <Switch>
          {/* <Router exact path="/" component={ MovieList } /> */}
          {/* <Router path="/movies/:id" component={ MovieDetails } /> */}
          {/* <Router path="/movies/new" component={ NewMovie } /> */}
          {/* <Router path="/movies/:id/edit" component={ EditMovie } /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
