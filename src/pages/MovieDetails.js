import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.match.params,
      loading: true,
      movie: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.state;
    this.setState(
      { loading: true },
      async () => {
        const getMovie = await movieAPI.getMovie(id);
        this.setState({
          movie: getMovie,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <div>{ loading ? <Loading /> : null }</div>
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h2>{ `Title: ${title}` }</h2>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieDetails;
