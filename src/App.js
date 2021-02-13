import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie } from './pages';
import './App.css';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <Router>
        <Switch>
          <Route patch="/" component={ MovieList } />
          <Route patch= "/movies/:id" component={ MovieDetails } />
          <Route patch= "/movies/new" component={ NewMovie } />
          <Route patch="/movies/:id/edit" component={ EditMovie } />
          <Route patch="/" component={ MovieList } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

    // ✕ qualquer rota não declarada deve renderizar NotFound (3ms)
