import React, { Component } from 'react';

import { Loading, MovieForm } from '../components';
// import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    console.log(updatedMovie);
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    console.log(movie);
    if (shouldRedirect) {
      // Redirect
    }

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <h1>EDIT MOVIE</h1>
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
