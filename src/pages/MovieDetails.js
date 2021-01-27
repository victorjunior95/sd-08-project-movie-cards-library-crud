import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movie: '',
    };
    // this.renderButton = this.renderButton.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState({ movie, isLoading: false }));
  }

  // renderButton() {
  //   const { movie: { id } } = this.state;
  //   return (
  //     <>
  //       <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
  //       <Link to="/">VOLTAR</Link>
  //       <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
  //     </>
  //   );
  // }

  render() {
    const { isLoading, movie } = this.state;
    if (isLoading) return <Loading />;
    const { id, title, subtitle, storyline, imagePath, genre, rating } = movie;
    return (
      <div style={ { backgroundColor: 'white' } } data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Titulo: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
