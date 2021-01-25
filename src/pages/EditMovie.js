import React, { Component } from 'react';
import { Loading, MovieForm } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: undefined,
      status: false,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  handleSubmit(updatedMovie) {}

  async fetchMovie() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const data = await movieAPI.getMovie(id);

    this.setState({ movie: data });

    if (!data) {
      // return this.redirectNotFound();
      this.setState({ shouldRedirect: true });
    }
    this.setState({ status: true });
  }

  redirectNotFound() {
    const {
      history: { push },
    } = this.props;
    push('/notfound');
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return this.redirectNotFound();
    }

    if (status === 'loading') {
      return <Loading />;
    }
    const { id } = this.state;

    return (
      <div data-testid="edit-movie">
        <h3>{id}</h3>
        {/* <MovieForm movie={ movie } onSubmit={ this.handleSubmit } /> */}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default EditMovie;
