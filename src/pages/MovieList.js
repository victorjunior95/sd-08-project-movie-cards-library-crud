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
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => {
      this.setState({
        movies: data,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

// função de ciclo de vida, componentDidMount e dentro a gnt faz a requisição
// para API, acessamos a getMovie, q retorna uma promisse, e atraves do
// .then e pegamos o retorno dela (data).
// alterei o texto no componente loading para carregando
// import do loading. cria o state, p verificar o loading
// if(loading), retorna o component loading.
// qdo terminar o loading, ocorre o .then, e set do loading p false
// que vai trazer e renderizar todos movies, movie card.

export default MovieList;
