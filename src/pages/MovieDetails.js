import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then((myFetchMovies) =>
    this.setState({
      movies: myFetchMovies,
      isLoading: false,
    }));
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movies;
    const { isLoading } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div data-testid="movie-details" className="movie-card-body">
        <img alt="Movie Cover" className="movie-card-image" src={`../${imagePath}`} />
        <p className="movie-card-title" >{`Title: ${title}`}</p>
        <p className="movie-card-subtitle" >{`Subtitle: ${subtitle}`}</p>
        <p className="movie-card-storyline" >{`Storyline: ${storyline}`}</p>
        <p className="movie-card-genre">{`Genre: ${genre}`}</p>
        <p className="rating" >{`Rating: ${rating}`}</p>
        <Link className="movie-card-link" to="/">VOLTAR</Link>
        <Link className="movie-card-link" to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link className="movie-card-link" to="/" onClick={() => { movieAPI.deleteMovie(id); }}>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
