import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

export default class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };

    this.showMovies = this.showMovies.bind(this);
  }

  componentDidMount() {
    this.showMovies();
  }

  showMovies() {
    this.setState(
      () => ({ loading: true }),
      async () => {
        const moviesArray = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: moviesArray,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        {
          loading ? <Loading />
            : (
              <div>
                {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
              </div>
            )
        }
      </div>
    );
  }
}
