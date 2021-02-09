import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: 'true',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState({
      movie,
      loading: false,
    }));
  }

  handleSubmit(updatedMovie) {
    console.log(updatedMovie);
    movieAPI.updateMovie(updatedMovie).then(this.setState({
      shouldRedirect: true,
    }));
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    // console.log(this.state.movie);
    if (shouldRedirect) return <Redirect to="/" />;

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default EditMovie;
