import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    }
  }

  async fetchMovie() {
    const movieID = this.props.match.params.id;
    this.setState(
      { loading: true },
      async () => {
        const getMovieInfo = await movieAPI.getMovie(movieID);
        this.setState({
          movie: getMovieInfo,
          loading: false,
        })
      }
    )
  }

  componentDidMount() {
    this.fetchMovie();
  }

  renderInfo() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    const { loading, movie } = this.state;
    const editMovie = `/movies/${movie.id}/edit`;

    return (
      <div>
        <span>{ loading ? <Loading /> : this.renderInfo() }</span>
        <Link to={ editMovie } >EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
