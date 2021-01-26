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

  componentDidMount() { // chama a funcao do api assim q a pagina e montada
    this.getApi();
  }

  async getApi() { // chama a api e define o estado atualizado como o array recebido
    const getMovie = await movieAPI.getMovies();
    this.setState({
      movies: getMovie,

    });
  }

  render() {
    const { movies } = this.state;

    return movies.length > 0 ? ( // pega o array passado pelo state e renderiza os cards contendo as propriedades como props com link um link para o caminho e se for igual ou menor q zero o componente loading e exibido
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    ) : (
      <Loading />
    );
  }
}

export default MovieList;
