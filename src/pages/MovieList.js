import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: {},
      loading: true,
    };

    this.loadingMovies = this.loadingMovies.bind(this);
  }

  componentDidMount() {
    this.loadingMovies();
  }

  async loadingMovies() {
    this.setState({ loading: true },
      async () => {
        const { getMovies } = movieAPI;
        const movies = await getMovies();
        this.setState({
          movies,
          loading: false,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
