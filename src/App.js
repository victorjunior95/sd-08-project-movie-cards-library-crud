import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>
        <div className="app-header">
          <h1 className="header-title">Movie Card Library CRUD Project</h1>
        </div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route path="" exact component={ NotFound } />
        </Switch>
        <div className="new-movie"><Link to="/movies/new">ADICIONAR CARTÃO</Link></div>
      </div>
    </Router>
  );
}

export default App;
