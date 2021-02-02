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
    this.loadingDetails = this.loadingDetails.bind(this);
    this.renderDeatails = this.renderDeatails.bind(this);
  }

  componentDidMount() {
    this.loadingDetails();
  }

  async loadingDetails() {
    const { id } = this.props;
    const esperaDetalhes = await movieAPI.getMovie(id);
    this.setState({
      movie: esperaDetalhes,
      loading: false,
    });
  }

  renderDeatails() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    const { id } = this.props;
    return (
      <main>
        { loading ? <Loading /> : this.renderDeatails() }
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </main>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MovieDetails;
