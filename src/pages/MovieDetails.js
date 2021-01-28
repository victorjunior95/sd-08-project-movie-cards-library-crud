import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(id);
  }

  handleClick() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  async fetchMovie(id) {
    this.setState({
      loading: true,
    }, async () => {
      await movieAPI.getMovie(id).then((response) => this.setState({
        loading: false,
        movie: response,
      }));
    });
  }

  renderLinks() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.handleClick }>DELETAR</Link>
      </div>
    );
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) return <Loading />;
    return (
      <section>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{`Title: ${title}`}</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        {this.renderLinks()}
      </section>

    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
