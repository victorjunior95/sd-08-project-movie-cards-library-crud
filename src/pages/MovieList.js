import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import '../components/css/movieCard.css';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: {},
      load: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const getMovies = await movieAPI.getMovies();
    this.setState({ movies: getMovies, load: false });
  }

  render() {
    const { movies, load } = this.state;
    // Render Loading here if the request is still happening
    if (load) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new" className="new-movie">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
