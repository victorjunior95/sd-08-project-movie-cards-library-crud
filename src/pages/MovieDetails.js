import React, { Component } from 'react';
import ProTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;
    const { imagePath, title, subtitle, genre, rating, storyline, id } = movie;
    if (!movie) return <Loading />;
    return (
      <>
        <img alt={ `${title}-movie-card` } src={ `${imagePath}` } />
        <h3>{ `title:${title}` }</h3>
        <h4>{ `Subtitle:${subtitle}` }</h4>
        <h5>{ `Genre:${genre} `}</h5>
        <p>{ `Rating:${rating} `}</p>
        <p>{ `Storyline: ${storyline} `}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </>
    );
  }
}

MovieDetails.propTypes = {
  match: ProTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  }).isRequired,
};
