import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      redirect: false,
      movie: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loader = this.loader.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState({ redirect: true }));
  }

  loader() {
    const { loading } = this.state;
    if (loading) {
      const { match: { params: { id } } } = this.props;
      movieAPI.getMovie(id)
        .then((movie) => this.setState({ movie, loading: false }));
      return (<Loading />);
    }
  }

  redirect() {
    const { redirect } = this.state;
    if (redirect) {
      return (<Redirect to="/" />);
    }
  }

  form() {
    const { movie } = this.state;
    return (<MovieForm movie={ movie } onSubmit={ this.handleSubmit } />);
  }

  render() {
    return (this.loader() || this.redirect() || this.form());
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    }).isRequired,
  }).isRequired,
};
