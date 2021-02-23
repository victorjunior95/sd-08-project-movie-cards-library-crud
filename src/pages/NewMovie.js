import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      movie: [],
      shouldRedirect: false,
    };
  }

  async handleSubmit(newMovie) {
    const addMovie = await movieAPI.createMovie(newMovie);
    this.setState({
      movie: [...addMovie],
      shouldRedirect: true,
    });
  }

  render() {
    const { movie, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect
          to={ {
            pathname: '/',
            newState: movie,
          } }
        />);
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default NewMovie;
