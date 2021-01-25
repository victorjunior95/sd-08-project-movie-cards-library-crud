import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadingMovieDetails = this.loadingMovieDetails.bind(this);
  }

  componentDidMount() {
    this.loadingMovieDetails();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    this.setState(async () => {
      await updateMovie(updatedMovie);
    }, () => {
      this.setState({ shouldRedirect: true });
    });
  }

  async loadingMovieDetails() {
    const { match: { params: { id } } } = this.props;
    this.setState({ status: 'loading' },
      async () => {
        const { getMovie } = movieAPI;
        const movie = await getMovie(id);
        this.setState({
          movie,
          status: 'loaded',
        });
      });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
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
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
