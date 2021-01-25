import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    const getLocalStorage = window.localStorage.getItem('movies');
    const convertToArray = JSON.parse(getLocalStorage);
    const filterArray = convertToArray.filter(({ id }) => id !== updatedMovie.id);
    filterArray.push(updatedMovie);
    window.localStorage.setItem('movies', JSON.stringify(filterArray));
    this.setState(() => ({ shouldRedirect: true }));
  }

  fetchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState(() => ({ loading: true }), () => {
      movieAPI.getMovie(id).then((resolve) => {
        this.setState(() => (
          {
            movie: resolve,
            loading: false,
          }
        ));
      });
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loading) {
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
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
