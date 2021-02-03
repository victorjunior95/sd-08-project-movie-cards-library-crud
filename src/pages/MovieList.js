import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import './MovieList.css';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fecthMovies();
  }

  fecthMovies() {
    this.setState({ loading: true }, async () => {
      const requestMovies = await movieAPI.getMovies();
      this.setState({ movies: requestMovies, loading: false });
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div className="movie-list" data-testid="movie-list">
        <Link className="add-movie" to="/movies/new">ADICIONAR CARTÃO</Link>
        {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
      </div>
    );
  }
}

export default MovieList;
