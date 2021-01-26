import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: [],
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  // shouldComponentUpdate() {
  //   const { movies } = this.state;
  //   console.log(movies);
  //   if (movies.length !== 0) {
  //     return true;
  //   }
  //   return false;
  // }

  fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const movies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
