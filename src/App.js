import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import './App.css';
import { EditMovie, MovieDetails, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <h1 style={ { textAlign: 'center', color: 'grey' } }>Movie Card Library CRUD</h1>
      <nav className="navBar">
        <Link to="/">Home</Link>
        {/* <Link to="/movie/:id">Movie Details</Link> */}
      </nav>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
