import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

// eslint-disable-next-line
import * as movieAPI from '../services/movieAPI';
import NotFound from './NotFound';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    try {
      const res = await movieAPI.getMovies();
      this.setState({ movies: res });
    } catch (e) {
      return <Redirect to={ NotFound } />;
    }
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.length === 0 ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
      </div>
    );
  }
}

export default MovieList;
