import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieAPI';

import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movies: {},
      apiCall: true,
    };
    this.returnSingleApi = this.returnSingleApi.bind(this);
    this.infoRender = this.infoRender.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.returnSingleApi();
  }

  async returnSingleApi() {
    const { match: { params: { details } } } = this.props;
    const movieApiReturn = await getMovie(details);
    this.setState({
      movies: movieApiReturn,
      apiCall: false,
    });
  }

  async deleteMovie() {
    const { match: { params: { details } } } = this.props;
    const returnAPIdeleted = await deleteMovie(details);
    this.setState({
      movies: { ...returnAPIdeleted },
    });
  }

  infoRender() {
    const { movies } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;

    return (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </>);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { apiCall } = this.state;

    return (
      <div data-testid="movie-details">
        {apiCall ? <Loading /> : this.infoRender() }
      </div>

    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieDetails;
