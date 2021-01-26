import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
// import NewMovie from './pages/NewMovie';
// import EditMovie from './pages/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
