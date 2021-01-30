import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {
        id: -1,
        title: '',
        subtitle: '',
        storyline: '',
        rating: -1,
        imagePath: '',
        bookmarked: null,
        genre: '',
      },
      isLoaded: false,
      ID: null,
      shouldRedirect: false,
    };

    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const { pathname } = location;
    const ID = pathname.split('/')[2];
    movieAPI.getMovie(ID).then((movie) => {
      this.setState({
        movie,
        isLoaded: true,
        ID,
      });
    });
  }

  deleteCard() {
    const { ID } = this.state;
    movieAPI.deleteMovie(ID).then(
      this.setState({
        shouldRedirect: true,
      }),
    );
  }

  pageRender(movie, ID) {
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <h3>{ title }</h3>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtítulo: ${subtitle}` }</p>
        <p>{ `Sinopse: ${storyline}` }</p>
        <p>{ `Gênero: ${genre}` }</p>
        <p>{ `Avaliação: ${rating}` }</p>
        <Link to="/" onClick={ this.deleteCard }>DELETAR</Link>
        <div>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${ID}/edit` }>EDITAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { movie, isLoaded, ID, shouldRedirect } = this.state;
    if (!isLoaded) return (<Loading />);
    if (shouldRedirect) return (<Redirect to="/" />);
    return (this.pageRender(movie, ID));
  }
}

MovieDetails.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
