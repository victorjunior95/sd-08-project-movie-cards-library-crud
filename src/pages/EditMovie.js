import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((myFetchMovie) =>
    this.setState({
      isLoading: false,
      movie: myFetchMovie,
    }));
  }

  async handleSubmit(updatedMovie) {
    const myMovie = await movieAPI.updateMovie(updatedMovie);
    if (myMovie === 'OK') this.setState({ shouldRedirect: true });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;
    if (isLoading) return <Loading />;

    return (
      <div data-testid="edit-movie" className="form-body">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
        <Link className="form-button-back" to={`/movies/${movie.id}`}>VOLTAR</Link>
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;

