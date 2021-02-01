import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
// import { updateMovie } from '../services/movieAPI';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovieUpdate = this.fetchMovieUpdate.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovieAPI(id);
  }

  handleSubmit(updatedMovie) {
    console.log(updatedMovie);
    this.fetchMovieUpdate(updatedMovie);
  }

  async fetchMovieUpdate(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async fetchMovieAPI(id) {
    const requestedMovie = await movieAPI.getMovie(id);
    this.setState({
      status: false,
      movie: requestedMovie,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    const loadingElement = <Loading />;
    console.log(status, shouldRedirect);
    if (shouldRedirect) {
      console.log('redirect');
      return (<Redirect to="/" />);
    }

    if (status === true) {
      return (loadingElement);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

// Utilizei a ajuda da aula do Paulo

export default EditMovie;
