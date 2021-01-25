import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      hasLoading: true,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const response = await movieAPI.getMovies();
    const data = await response;
    this.setState({ movies: data, hasLoading: false });
  }

  render() {
    const { movies, hasLoading } = this.state;

    // Render Loading here if the request is still happening
    if (hasLoading) return <Loading />;

    return (
      <div className="movie-list" data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div className="movie-list-body">
          {movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
