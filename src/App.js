import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/:id" component={ NotFound } />
        <Route path="/" component={ MovieList } />
      </Switch>
    </Router>
  );
}

export default App;
