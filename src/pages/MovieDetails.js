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
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleDelete() {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
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
    const { id, title, storyline, imagePath, genre, subtitle } = movie;

    return (
      <div data-testid="movie-details" className="movie-details">
        <div>{ loading ? <Loading /> : null }</div>
        <div className="details-card">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h2>{ `Title: ${title}` }</h2>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <Link className="link" to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link className="link" to="/" onClick={ this.handleDelete }>DELETAR</Link>
          <Link className="link" to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieDetails;
