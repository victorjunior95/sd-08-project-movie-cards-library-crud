import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/new" component={NewMovie} />
      <Route
        path="/movies/:id/edit"
        render={(props) => <EditMovie {...props} />}
      />
      <Route
        path="/movies/:id"
        render={(props) => <MovieDetails {...props} />}
      />
      <Route path="/" component={NotFound} />
    </Switch>
  );
}
export default App;
