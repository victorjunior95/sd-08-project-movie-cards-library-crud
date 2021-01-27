import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      movieID: id,
      movie: {},
      load: true,
      shouldRedirect: false,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.renderMovieCard = this.renderMovieCard.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { movieID } = this.state;
    const getMovie = await movieAPI.getMovie(movieID);
    this.setState({ movie: getMovie, load: false });
  }

  delMovie(id) {
    movieAPI.deleteMovie(id);
    this.setState({ shouldRedirect: true });
  }

  renderMovieCard(movie) {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <section className="card-details">
        <section className="card-movie-info">
          <h3>{title}</h3>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </section>
        <nav className="card-movie-link">
          <Link to="/" className="btn-back">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` } className="btn-edit">EDITAR</Link>
          <Link to="/" onClick={ () => this.delMovie(id) } className="del">DELETAR</Link>
        </nav>
      </section>
    );
  }

  render() {
    const { load, movie, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    if (load) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        {this.renderMovieCard(movie)}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
