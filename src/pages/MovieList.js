import React, { Component } from 'react';
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
    // movieAPI.getMovie().then((data) => {
    //   this.setState({
    //     loading: !loading,
    //     movies: data,
    //   });
    // });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    // if (loading) return <h1>Carregando...</h1>;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
