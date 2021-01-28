import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loadingMessenge: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({
      movies: [...await movieAPI.getMovies()],
      loadingMessenge: false,
    });
  }

  render() {
    const { loadingMessenge, movies } = this.state;
    return (
      <div className="movie-list-container">
        <div className="movie-list" data-testid="movie-list">
          {loadingMessenge
            ? <Loading />
            : (
              <>
                <Link to="/movies/new" className="handler-card">ADICIONAR CARTÃO</Link>
                <div className="page-title">Movie Cards Library</div>
                {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
              </>
            )}
        </div>
      </div>
    );
  }
}

export default MovieList;
