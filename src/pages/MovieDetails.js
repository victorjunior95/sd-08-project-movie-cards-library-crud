import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => {
      this.setState({
        movie,
        loading: false,
      });
    });
  }

  handleClick() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { id, storyline, imagePath, genre, rating, subtitle, title } = movie;
    if (loading) return <Loading />;
    return (
      <main data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <section>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` } movie={ movie }>EDITAR</Link>
          <Link to="/" onClick={ this.handleClick }>DELETAR</Link>
        </section>
      </main>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MovieDetails;
