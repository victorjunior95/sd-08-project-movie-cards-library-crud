import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      this.setState({
        movies,
      });
    });
  }

  render() {
    const { movies } = this.state;

    // if (movies.length) return <Loading />;
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.length > 0
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading />}
        <Link to="/movies/new" className="link-add-card">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
