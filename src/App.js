import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound } from './pages';

// Important note: this development has followed
// the step by step tutorial  guide made in 27/01 at 20 o'clock.
// For more details, look at the next link:
// https://trybecourse.slack.com/archives/C01A9A2N93R/p1611772490267600
function App() {
  return (
    <>
      <div>Movie Card Library CRUD</div>
      <Router>
        <Switch>
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/" component={ MovieList } />
          <Route path="/" component={ NotFound } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
