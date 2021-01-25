import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.getFilm();
  }

  async getFilm() {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);

    this.setState({
      movie: response,
      loading: false,
    });
  }

  renderMovie() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{`Title: ${title}`}</h1>
        <p>{`Subtitle: ${subtitle} `}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `${id}/edit` }>EDITAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      loading ? <Loading /> : this.renderMovie()
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
