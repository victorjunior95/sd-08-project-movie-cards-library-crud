import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newMovieRequest = this.newMovieRequest.bind(this);
  }

  handleSubmit(newMovie) {
    this.newMovieRequest(newMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async newMovieRequest(newMovie) {
    await movieAPI.createMovie(newMovie);
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

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
