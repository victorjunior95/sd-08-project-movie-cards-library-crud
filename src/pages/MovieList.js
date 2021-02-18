import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.renderLoading = this.renderLoading.bind(this);
    this.renderMovies = this.renderMovies.bind(this);

    this.state = {

    };
  }

  componentDidMount() {
    const { getMovies } = movieAPI;
    getMovies().then((movies) => this.setState({ movies }));
  }

  renderLoading() {
    return (
      <Loading />
    );
  }

  renderMovies() {
    const { movies } = this.state;
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        { movies ? this.renderMovies() : this.renderLoading() }
      </div>
    );
  }
}

export default MovieList;
