import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './EditMovie.css';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {
        bookmarked: false,
        genre: '',
        imagePath: '',
        rating: 0,
        storyline: '',
        subtitle: '',
        title: '',
        id: '',
      },
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    await createMovie(newMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { movie, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie" className="movie-form-container">
        <MovieForm onSubmit={ this.handleSubmit } movie={ movie } />
      </div>
    );
  }
}
export default NewMovie;
