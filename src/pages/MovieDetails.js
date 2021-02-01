import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loadingMessenge: true,
      movie: {},
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  //  this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const data = await movieAPI.getMovie(id);
    this.setState({
      movie: data,
      loadingMessenge: false,
    });
  }

  render() {
    // const { movie: { id } } = this.state;
    const { loadingMessenge } = this.state;
    if (loadingMessenge) return <Loading />;
    const { movie: { id, title, storyline, imagePath, genre, rating, subtitle,
    } } = this.state;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object),
  match: PropTypes.objectOf(PropTypes.object),
}.isRequired;
// função não veio de movieAPI onClick={ movieAPI.deleteMovie(id) }

export default MovieDetails;
