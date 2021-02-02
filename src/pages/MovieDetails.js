import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.filterId = this.filterId.bind(this);
    this.state = {
      load: false,
      movies: [],
    };
  }

  componentDidMount() {
    this.filterId();
  }

  body() {
    const { movies: { title, storyline, imagePath, genre,
      rating, subtitle, id } } = this.state;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }

  async filterId() {
    const { match: { params: { id } } } = this.props;
    const result = await movieAPI.getMovie(id);
    this.setState({
      load: true,
      movies: result,
    });
  }

  render() {
    const { load } = this.state;
    if (load === false) { return <Loading />; }
    return (
      <div data-testid="movie-details">
        { this.body() }
      </div>
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
