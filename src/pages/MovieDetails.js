// Bibliotecas React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// API
import * as movieAPI from '../services/movieAPI';
// Components
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = props;

    this.state = {
      movies: [],
      loading: true,
      id,
    };

    this.fetchData = this.fetchData.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async deleteMovie() {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
  }

  async fetchData() {
    const { id } = this.state;
    const data = await movieAPI.getMovie(id);

    if (data) {
      this.setState({
        movies: data,
        loading: false,
      });
    }
  }

  render() {
    const { movies, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movies;
    if (loading) {
      return <div><Loading /></div>;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
