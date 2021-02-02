import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { MovieList, MovieDetails, EditMovie, NotFound, NewMovie } from './pages';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie id={ props.match.params.id } /> }
        />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          path="/movies/:id"
          render={ (props) => <MovieDetails id={ props.match.params.id } /> }
        />
        <Route path="" component={ NotFound } />
      </Switch>
    </Router>
  );
}
App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default App;
