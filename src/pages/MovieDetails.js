import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      isLoaded: false,
    }

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  async fetchMovie() {
    const { id } = this.props.match.params
    const { getMovie } = movieAPI;
    const movie = await getMovie(id);
    this.setState({ 
      movie: movie,
      isLoaded: true,
    });
  }

  componentDidMount() {
    this.fetchMovie();
  }


  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, isLoaded } = this.state;
    if (!isLoaded) {
      return <Loading />;
    } else {
      const { title, storyline, imagePath, genre, rating, subtitle } = movie;

      return (
        <div data-testid="movie-details">
          <h2>{ title }</h2>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to="/movies/:id/edit">EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      );
    }
  }
}

export default MovieDetails;
