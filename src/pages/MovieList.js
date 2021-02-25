// Bibliotecas React
import React, { Component } from 'react';
// Components
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
// Functions API
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const data = await movieAPI.getMovies();

    if (data) {
      this.setState({
        movies: data,
        loading: false,
      });
    }
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return <div><Loading /></div>;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <div key={ movie.id }>
            <MovieCard
              movie={ movie }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;
