import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.getMovieFunc = this.getMovieFunc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      status: 'loading',
      movie: '',
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.getMovieFunc();
  }

  async handleSubmit(target) {
    await movieAPI.updateMovie(target);
    this.setState({ shouldRedirect: true });
  }

  async getMovieFunc() {
    const { match: { params: { id } } } = this.props;
    const requestMovie = await movieAPI.getMovie(id);
    this.setState({ status: true, movie: requestMovie });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      return (<Loading />);
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
