import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies().then((movies) => {
        this.setState({
          loading: false,
          movies,
        });
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
