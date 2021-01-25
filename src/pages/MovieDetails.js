import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: undefined,
      done: false,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const data = await movieAPI.getMovie(id);
    this.setState({ movie: data });
    if (!data) {
      const {
        history: { push },
      } = this.props;
      return push('/notfound');
    }
    this.setState({ done: true });
  }

  removeMovie() {
    const {
      movie: { id },
    } = this.state;
    movieAPI.deleteMovie(id);
  }

  renderDetails() {
    const {
      movie: { id, title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;
    return (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `./${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.removeMovie }>
          DELETAR
        </Link>
      </>
    );
  }

  render() {
    const { done } = this.state;
    return (
      <div data-testid="movie-details">{!done ? <Loading /> : this.renderDetails()}</div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
MovieDetails.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default MovieDetails;
