import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import PStrong from '../components/PStrong';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: {},
    };

    this.getMovie = this.getMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie,
    });
  }

  async deleteMovie() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  }

  detailsImage() {
    const { movie: { title, imagePath } } = this.state;
    return (
      <section className="movie-details-image">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{title}</h4>
      </section>
    );
  }

  detailsBody() {
    const { movie: { storyline, genre, rating, subtitle } } = this.state;
    return (
      <section className="movie-details-body">
        <PStrong title="Subtitle: " descrip={ subtitle } />
        <PStrong title="Storyline: " descrip={ storyline } />
        <PStrong title="Genre: " descrip={ genre } />
        <PStrong title="Rating: " descrip={ rating } />
      </section>
    );
  }

  render() {
    const { loading, movie: { id } } = this.state;

    return (loading ? <Loading /> : (
      <main className="details-wrapper">
        <section data-testid="movie-details" className="movie-details">
          { this.detailsImage() }
          { this.detailsBody() }
          <section className="movie-details-learn-more">
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
            <Link to="/">VOLTAR</Link>
          </section>
        </section>
      </main>)
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
