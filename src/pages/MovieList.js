import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.moviesFetch = this.moviesFetch.bind(this);
  }

  componentDidMount() {
    this.moviesFetch();
  }

  async moviesFetch() {
    this.setState({
      loading: true,
    }, async () => {
      await movieAPI.getMovies().then((response) => this.setState({
        loading: false,
        movies: response,
      }));
    });
  }

  render() {
    const { movies, loading } = this.state;
    const renderMovieCard = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : renderMovieCard}
      </div>
    );
  }
}

export default MovieList;
