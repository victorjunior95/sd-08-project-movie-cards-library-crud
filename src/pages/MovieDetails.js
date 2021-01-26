import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      isRequestComplete: false,
    };
  }

  async componentDidMount() {
    this.callGetMovie();
  }

  async callGetMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      isRequestComplete: true,
    });
  }

  async deleteMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  renderMovie() {
    const { movie: { title,
      storyline, imagePath, genre, rating, subtitle } } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div className="movie-details">
        <img className="" alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p className="rating">{ `Rating: ${rating}` }</p>
        <div className="movie-details-links">
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
        </div>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { isRequestComplete } = this.state;
    if (isRequestComplete === false) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        {this.renderMovie()}
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
