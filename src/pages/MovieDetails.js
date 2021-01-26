import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      isLoaded: false,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.verifyImagePath = this.verifyImagePath.bind(this);
    this.deleteLink = this.deleteLink.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;
    const movieRecieved = await getMovie(id);
    this.setState({
      movie: movieRecieved,
      isLoaded: true,
    });
  }

  verifyImagePath(path) {
    if (path.includes('http')) {
      return path;
    }

    return `../${path}`;
  }

  async deleteLink() {
    const { match } = this.props;
    const { id } = match.params;
    const { deleteMovie } = movieAPI;
    await deleteMovie(id);
  }

  render() {
    const { movie, isLoaded } = this.state;
    if (!isLoaded) { return <Loading />; }
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const path = imagePath;
    return (
      <div data-testid="movie-details">
        <h2>{ title }</h2>
        <img alt="Movie Cover" src={ this.verifyImagePath(path) } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteLink }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  }).isRequired,
};

export default MovieDetails;
