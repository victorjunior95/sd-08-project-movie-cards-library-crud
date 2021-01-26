import React, { Component } from 'react';
// eslint-disable-next-line import/no-named-as-default
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => {
      this.setState({
        loading: false,
        movies: data,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
