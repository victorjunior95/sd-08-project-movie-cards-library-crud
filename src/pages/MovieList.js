import React, { Component } from 'react';
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
    this.loadMovies();
  }

  async loadMovies() {
    this.setState({
      movies: [...await movieAPI.getMovies()],
      loading: false,
    });
  }

  homeContent(movies) {
    return (
      <>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </>);
  }

  render() {
    const { loading, movies } = this.state;
    return (
      <div data-testid="movie-list">
        {loading
          ? <Loading />
          : this.homeContent(movies)}
      </div>
    );
  }
}

export default MovieList;
