import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.deleteMovieInfo = this.deleteMovieInfo.bind(this);

    this.state = {
      ...props.match.params,
      loading: true,
      movie: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  deleteMovieInfo() {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
  }

  async fetchMovie() {
    const { id } = this.state;
    this.setState(
      { loading: true },
      async () => {
        const getMovie = await movieAPI.getMovie(id);
        this.setState({
          movie: getMovie,
          loading: false,
        });
      },
    );
  }

  renderInfo() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>

        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.deleteMovieInfo }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <span>{ loading ? <Loading /> : this.renderInfo() }</span>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieDetails;
