import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      load: true,
      movie: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.importMovies(movieAPI.getMovie(id));
  }

  importMovies(final) {
    this.setState(
      { load: true },
      async () => {
        this.setState({
          movie: await final,
          load: false,
        });
      },
    );
  }

  delete(movies) {
    movieAPI.deleteMovie(movies);
  }

  renderMovieDetails() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ `Title: ${title}` }</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <p><Link to={ `/movies/${id}/edit` }>EDITAR</Link></p>
        <p><Link to="/" onClick={ () => this.delete(id) }>DELETAR</Link></p>
        <p><Link to="/">VOLTAR</Link></p>
      </div>
    );
  }

  render() {
    const { load } = this.state;
    return (
      <div data-testid="movie-details">
        {load ? <Loading /> : this.renderMovieDetails()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
