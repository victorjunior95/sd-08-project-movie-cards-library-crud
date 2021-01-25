import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
// import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        {/* <Redirect from="*" component={ NotFound } /> */}
      </Switch>
    </Router>
  );
}

export default App;
