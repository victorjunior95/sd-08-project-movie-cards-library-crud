import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  // A ideia do setState abaixo para retornar todos os filmes e nao apenas o primeiro
  // consultei o código do github https://github.com/tryber/sd-08-project-movie-cards-library-crud/blob/df1d9fd3728ec7507603c8325cf9d7f61f5de280/src/pages/MovieList.js
  componentDidMount() {
    movieAPI.getMovies().then((list) => this.setState({
      movies: [...list],
      loading: false,
    }));
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        <h1>Movie List</h1>
        <div className="movie-card-container">
          { movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
          )) }
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
