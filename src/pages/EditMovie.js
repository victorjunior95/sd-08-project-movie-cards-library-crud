import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = props;

    this.state = {
      id,
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buscarMovie = this.buscarMovie.bind(this);
  }

  componentDidMount() {
    this.buscarMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ movie: updatedMovie, shouldRedirect: true });
  }

  buscarMovie() {
    const { id } = this.state;
    this.setState({ status: 'loading' }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({ status: 'notloading', movie });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (status === 'loading') return (<div data-testid="edit-movie"><Loading /></div>);

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
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
