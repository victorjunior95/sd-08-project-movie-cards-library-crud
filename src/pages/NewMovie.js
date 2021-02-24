import React, { Component } from 'react';
import { Loading } from '../components';

import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    console.log(newMovie);
  }

  render() {
    return (
      <div data-testid="new-movie">
        NEW MOVIE
        <Loading />
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
