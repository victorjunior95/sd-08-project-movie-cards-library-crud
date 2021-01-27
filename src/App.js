import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <header className="movie-card-header">Movie Card Library CRUD</header>
      <Switch>
        <Router exact path="/movies/new"><NewMovie /></Router>
        <Router exact path="/movies/:id"><MovieDetails /></Router>
        <Router exact path="/movies/:id/edit"><EditMovie /></Router>
        <Router exact path="/"><MovieList /></Router>
        <Router path="*"><NotFound /></Router>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
