import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.updatedMovie = this.updatedMovie.bind(this);
    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    this.updatedMovie();
  }

  async deleteMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  updatedMovie() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    movieAPI.getMovie(id).then((result) => this.setState({ movie: result }));
  }

  render() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (!movie) return <Loading />;
    return (
      <div data-testid="movie-details">
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
        </div>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default MovieDetails;
