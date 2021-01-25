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
      loading: false,
    };
  }

  componentDidMount() {
    this.addStateMovies();
  }

  addStateMovies() {
    this.setState({
      loading: true,
    },
    async () => {
      await movieAPI.getMovies()
        .then((data) => {
          this.setState({
            movies: [...data],
            loading: false,
          });
        });
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div>

        {
          loading ? <Loading />
            : (
              <div data-testid="movie-list">
                <Link to="/movies/new"> ADICIONAR CARTÃO</Link>
                {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
              </div>
            )
        }
      </div>
    );
  }
}

export default MovieList;
