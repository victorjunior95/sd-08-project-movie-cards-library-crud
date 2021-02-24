import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.getPosts = this.getPosts.bind(this);
    this.renderMovies = this.renderMovies.bind(this);
  }

  async componentDidMount() {
    await this.getPosts();
  }

  async getPosts() {
    const data = await movieAPI.getMovies();
    this.setState({
      movies: data,
      loading: false,
    });
  }

  renderMovies() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div
        data-testid="movie-list"
      >
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        { loading ? <Loading /> : this.renderMovies() }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
