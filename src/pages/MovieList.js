import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log('oi');
  }

  addStateMovies() {
    this.setState({
      loading: true,
    },
    async () => {});
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
                {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
              </div>
            )
        }
      </div>
    );
  }
}

export default MovieList;
