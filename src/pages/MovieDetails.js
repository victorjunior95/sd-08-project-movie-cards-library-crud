import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      loading: true,
    };

    this.buscarMovie = this.buscarMovie.bind(this);
  }

  componentDidMount() {
    this.buscarMovie();
  }

  buscarMovie() {
    const { match: { params: { id } } } = props;
    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({ loading: false, movie });
    });
  }

  async apagarMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading, id } = this.state;
    if (loading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
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
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ () => this.apagarMovie(id) }>DELETAR</Link>
        </div>
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
