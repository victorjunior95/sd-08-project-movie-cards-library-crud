import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: undefined,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.fetchGetMovie(params.id);
  }

  async deleteMovie() {
    const { movie } = this.state;
    await movieAPI.deleteMovie(movie.id);
  }

  async fetchGetMovie(id) {
    const request = await movieAPI.getMovie(id);
    this.setState({
      movie: request,
    });
  }

  renderInfo() {
    const { movie } = this.state;
    if (movie === undefined) return <Loading />;
    const { title, id, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderInfo()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
