import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id)
      .then((res) => this.setState({ ...res, loading: false }));
  }

  handleClick() {
    const { match } = this.props;
    movieAPI.deleteMovie(match.params.id);
  }

  render() {
    const { loading } = this.state; if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state;
    return (
      <article data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{title}</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ this.handleClick }>DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </article>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
