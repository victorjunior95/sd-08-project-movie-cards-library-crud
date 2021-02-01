import React, { Component } from 'react';

import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: 'loading',
      movie: [0],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((data) => (
        this.setState({
          movie: data,
          status: 'loaded',
        })
      ));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    console.log(this.state);
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
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
