import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieInfo = this.getMovieInfo.bind(this);
    this.updateMovieRequest = this.updateMovieRequest.bind(this);
  }

  componentDidMount() {
    this.getMovieInfo();
  }

  handleSubmit(updatedMovie) {
    console.log(updatedMovie);
    this.updateMovieRequest(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async getMovieInfo() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const request = await movieAPI.getMovie(id);
    this.setState({
      movie: request,
      loading: false,
    });
  }

  async updateMovieRequest(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <h1>EDIT MOVIE</h1>
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
