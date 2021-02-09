import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: undefined,
      done: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.renderForm = this.renderForm.bind(this);
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
      return this.redirectNotFound();
    }
    this.setState({ done: true });
  }

  redirectNotFound() {
    const {
      history: { push },
    } = this.props;
    push('/notfound');
  }

  renderForm() {
    const { movie } = this.state;
    return <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />;
  }

  render() {
    const { done } = this.state;
    return <div data-testid="edit-movie">{!done ? <Loading /> : this.renderForm()}</div>;
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
