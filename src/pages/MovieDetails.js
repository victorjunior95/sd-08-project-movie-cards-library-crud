import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {
        id: -1,
        title: '',
        subtitle: '',
        storyline: '',
        rating: -1,
        imagePath: '',
        bookmarked: null,
        genre: '',
      },
      isLoaded: false,
      ID: null,
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const { pathname } = location;
    const ID = pathname.split('/')[2];
    movieAPI.getMovie(ID).then((movie) => {
      this.setState({
        movie,
        isLoaded: true,
        ID,
      });
    });
  }

  render() {
    const { movie, isLoaded, ID } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (!isLoaded) return (<Loading />);
    return (
      <div data-testid="movie-details">
        <h3>{ title }</h3>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtítulo: ${subtitle}` }</p>
        <p>{ `Sinopse: ${storyline}` }</p>
        <p>{ `Gênero: ${genre}` }</p>
        <p>{ `Avaliação: ${rating}` }</p>
        <div>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${ID}/edit` }>EDITAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
