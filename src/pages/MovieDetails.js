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
    this.renderButton = this.renderButton.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState({ movie, isLoading: false }));
  }

  onDelete({ target }) {
    movieAPI.deleteMovie(Number(target.value));
  }

  renderButton() {
    const { movie: { id } } = this.state;
    return (
      <>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        <button type="button" value={ id } onClick={ this.onDelete }>
          <Link to="/">
            DELETAR
          </Link>
        </button>
      </>
    );
  }

  render() {
    const {
      movie: { title, subtitle, storyline, imagePath, genre, rating },
      isLoading } = this.state;
    if (!isLoading) {
      return (
        <div style={ { backgroundColor: 'white' } } data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Titulo: ${title}`}</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          { this.renderButton() }
        </div>
      );
    }
    return <Loading />;
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
