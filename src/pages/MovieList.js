import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => (
        this.setState({
          movies: data,
        })
      ));
  }

  render() {
    const { movies } = this.state;
    console.log(movies);
    let card;
    if (movies.length === 0) {
      card = <Loading />;
    } else {
      card = movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    }

    return (
      <div data-testid="movie-list">
        {card}
      </div>
    );
  }
}

export default MovieList;
