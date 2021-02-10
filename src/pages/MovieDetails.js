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
      loading: true,
    };
    this.getMovieAPI = this.getMovieAPI.bind(this);
    this.renderFunc = this.renderFunc.bind(this);
  }

  componentDidMount() {
    this.getMovieAPI();
  }

  async getMovieAPI() {
    const { id } = this.props;
    const result = await movieAPI.getMovie(id);
    this.setState({
      movie: result,
      loading: false,
    });
  }

  renderFunc() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { id } = this.props;
    return (
      <div data-testid="movie-details">
        <p>{`Title: ${title}`}</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>

      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        { loading ? <Loading /> : this.renderFunc()}

      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieDetails;
