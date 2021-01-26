import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    createMovie(newMovie);
  }

  render() {
    const { loading } = this.state;
    if (loading === true) {
      return <Loading />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
