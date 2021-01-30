import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      isLoaded: false,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const { pathname } = location;
    const ID = pathname.split('/')[2];
    movieAPI.getMovie(ID).then((movie) => {
      this.setState({
        movie,
        isLoaded: true,
      });
    });
  }

  handleSubmit(movie) {
    movieAPI.updateMovie(movie);
    this.setState({
      movie,
      shouldRedirect: true,
    });
  }

  render() {
    const { isLoaded, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (!isLoaded) return (<Loading />);

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
  /* render() {
    return (
      <section data-testid="edit-movie">
        Teste do EditMovie
        <MovieForm />
      </section>
    );
  } */
}

EditMovie.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default EditMovie;
