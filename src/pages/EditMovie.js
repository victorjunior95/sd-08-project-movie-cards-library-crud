import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = props;

    this.state = {
      id,
      isLoading: true,
      shouldRedirect: false,
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.buscarMovie = this.buscarMovie.bind(this);
  }

  componentDidMount() {
    this.buscarMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ movie: updatedMovie, shouldRedirect: true });
  }

  buscarMovie() {
    const { id } = this.state;
    this.setState({ isLoading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({ isLoading: false, movie });
    });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (isLoading) return <Loading />;

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
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
