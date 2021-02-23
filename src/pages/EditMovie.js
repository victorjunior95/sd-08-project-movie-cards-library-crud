import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMoviesAPI = this.getMoviesAPI.bind(this);
  }

  componentDidMount() {
    this.getMoviesAPI();
  }

  handleSubmit(updatedMovie) {
    const { movie } = this.state;
    this.setState({
      movie: { ...movie, ...updatedMovie },
      shouldRedirect: true,
    });
  }

  async getMoviesAPI() {
    const { match: { params } } = this.props;
    const data = await movieAPI.getMovie(params.id);
    this.setState({
      movie: data,
      status: 'not loading',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    const { match: { params } } = this.props;
    if (shouldRedirect) {
      return (
        <Redirect
          to={ {
            pathname: '/',
            state: movie,
            index: params.id - 1,
          } }
        />);
    }
    if (status === 'loading') return <Loading />;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default EditMovie;
