import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

export default class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      movie: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderMovieForm = this.renderMovieForm.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.getMovie(id).then((movie) => this.setState({ movie }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => this.setState({ redirect: true }));
  }

  renderMovieForm() {
    const { movie } = this.state;
    return (
      <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
    );
  }

  renderLoading() {
    return (
      <Loading />
    );
  }

  renderRedirect() {
    return (
      <Redirect to="/" />
    );
  }

  render() {
    const { movie, redirect } = this.state;

    return (
      <div data-testid="edit-movie">
        { movie ? this.renderMovieForm() : this.renderLoading() }
        { redirect ? this.renderRedirect() : '' }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    }).isRequired,
  }).isRequired,
};
