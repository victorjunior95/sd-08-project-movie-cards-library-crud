import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToMovieList: false,
    };

    this.btnAddNewMovie = this.btnAddNewMovie.bind(this);
  }

  async btnAddNewMovie(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({
      redirectToMovieList: true,
    });
  }

  render() {
    const { redirectToMovieList } = this.state;
    if (redirectToMovieList) return (<Redirect to="/" />);
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.btnAddNewMovie } />
      </div>
    );
  }
}
export default NewMovie;
