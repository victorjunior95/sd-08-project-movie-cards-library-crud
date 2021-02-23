import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: {},
      loading: true,
    };
    this.renderDiv = this.renderDiv.bind(this);
    this.getMoviesAPI = this.getMoviesAPI.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.getMoviesAPI();
  }

  async getMoviesAPI() {
    const { match: { params } } = this.props;
    const data = await movieAPI.getMovie(params.id);
    this.setState({
      movies: { ...data },
      loading: false,
    });
  }

  async removeMovie() {
    const { match: { params } } = this.props;
    const removedMovie = await movieAPI.deleteMovie(params.id);
    this.setState({
      movies: { ...removedMovie },
    });
  }

  renderDiv() {
    const { movies } = this.state;
    const { imagePath, title, subtitle, genre, rating } = movies;
    return (
      <div>
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{`Storyline: ${movies.storyline}`}</p>
        <img
          alt="Movie Cover"
          src={ imagePath.includes('https') ? imagePath : `../${imagePath}` }
        />
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${movies.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.removeMovie }>DELETAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.renderDiv() }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieDetails;
