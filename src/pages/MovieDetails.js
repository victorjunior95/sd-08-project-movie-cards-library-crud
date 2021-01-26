import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      shoulRedirect: false,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.MovieChosen();
  }

  async MovieChosen() {
    const { match: { params: { id } } } = this.props;
    const movieSelected = await movieAPI.getMovie(id);
    this.setState({
      movie: movieSelected,
    });
  }

  async deleteMovie(id) {
    await movieAPI.deleteMovie(id);
    this.setState({
      shoulRedirect: true,
    });
  }

  render() {
    const { movie, shoulRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (Object.entries(movie).length === 0) return <Loading />;
    if (shoulRedirect === true) return <Redirect to="/" />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <span>{ title }</span>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
