import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      storyline: '',
      imagePath: '',
      genre: '',
      rating: '',
      subtitle: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovieDetail(id);
  }

  async fetchMovieDetail(id) {
    const { title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = await movieAPI.getMovie(id);
    this.setState({
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      loading: false,
    });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state;
    if (loading === true) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit ` }>EDITAR</Link>
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
