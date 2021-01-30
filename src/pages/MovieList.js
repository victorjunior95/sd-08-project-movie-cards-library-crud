import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

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
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const requestMovies = await movieAPI.getMovies();
        // console.log(requestMovies)
        this.setState({
          loading: false,
          movies: requestMovies,
        });
      },
    );
  }

  renderList = () => {
    const { movies } = this.state;
    // console.log('renderList')
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : this.renderList()}
      </div>
    );
  }
}

export default MovieList;
