import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '', status: 'loading', shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.obtemFilme();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async obtemFilme() {
    const { match } = this.props;
    const { id } = match.params;
    const requestMovie = movieAPI.getMovie(id);
    const Movie = await requestMovie;
    this.setState({
      movie: Movie,
      status: '',
      shouldRedirect: false,
    });
  }

  renderLoading() {
    return (
      <Loading />
    );
  }

  renderRedirect() {
    return (
      <Route exact path="/">
        <Redirect to="/" />
      </Route>
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
        <Loading />
      );
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.string.isRequired,
};

export default EditMovie;
