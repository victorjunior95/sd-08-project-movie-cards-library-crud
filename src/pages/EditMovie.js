import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { MovieCard, MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    console.log(location);
    const matchMovieId = location.pathname.match(/\d+/g);
    const id = parseInt(matchMovieId, 10);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    console.log(id);
    movieAPI.getMovie(id)
      .then((resolve) => this.setState({ movie: resolve, status: 'loaded' }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then((resolve) => this.setState({ movie: resolve, shouldRedirect: true }));
  }

  renderCardForm(movie) {
    return (
      <div data-testid="edit-movie">
        <MovieCard key={ movie.title } movie={ movie } />
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }

  renderLoading() {
    return (
      <div data-testid="edit-movie">
        <Loading />
      </div>
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }
    if (status === 'loading') {
      return (
        this.renderLoading()
      );
    }
    if (status === 'loaded') {
      return (
        this.renderCardForm(movie)
      );
    }
  }
}

EditMovie.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
};

export default EditMovie;
