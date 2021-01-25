import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: undefined,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    const {
      history: { push },
    } = this.props;
    return push('/');
  }

  async fetchMovie() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const data = await movieAPI.getMovie(id);
    this.setState({ movie: data });
    if (!data) {
      const {
        history: { push },
      } = this.props;
      return push('/notfound');
    }
    this.setState({ status: '' });
  }

  render() {
    const { status, movie } = this.state;
    return (
      <div data-testid="edit-movie">
        {status === 'loading' ? (
          <Loading />
        ) : (
          <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        )}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
EditMovie.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
export default EditMovie;
