import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { EditMovie, NewMovie, MovieDetails, MovieList, NotFound } from './pages/index';

function App() {
  return (
    <Router>
      <div className="CRUD">Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
