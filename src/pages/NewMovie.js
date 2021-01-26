import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    const movies = movieAPI.getMovies().then((result) => result);
    console.log(movies);
    this.state = {
      shouldRedirect: false,
      // addedMovie: '',
      // movies,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const { shouldRedirect, movies } = this.state;
    movieAPI.createMovie({ ...newMovie })
      .then((resolve) => this.setState({
        shouldRedirect: !shouldRedirect,
        // addedMovie: JSON.stringify(resolve),
        movies: resolve,
      }));
    console.log(movies);
  }

  // handleSubmit() {
  //   console.log(this.props);
  // }
  renderMovieForm() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }

  render() {
    const { shouldRedirect } = this.state;
    return (
      shouldRedirect ? <Redirect exact to="/" />
        : this.renderMovieForm()
    );
  }
}
export default NewMovie;
