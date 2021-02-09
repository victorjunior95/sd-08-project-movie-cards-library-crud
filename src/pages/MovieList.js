import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

export default class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };

    this.moviesList = this.moviesList.bind(this);
  }

  componentDidMount() {
    this.moviesList();
  }

  moviesList() {
    this.setState(
      () => ({ loading: true }),
      async () => {
        const moviesArray = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: moviesArray,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        {
          loading ? <Loading />
            : (
              <div data-testid="movie-list">
                {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
              </div>
            )
        }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}
