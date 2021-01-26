import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: 0,
        subtitle: '',
      },
      isLoading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((response) => {
        this.setState({
          movie: response,
          isLoading: false,
        });
      });
  }

  async apagarMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, isLoading } = this.state;
    const { match: { params: { id } } } = this.props;
    if (isLoading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <p>{ `Title: ${movie.title}` }</p>
        <p>{`Subtitle: ${movie.subtitle}`}</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.apagarMovie(id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: String.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
