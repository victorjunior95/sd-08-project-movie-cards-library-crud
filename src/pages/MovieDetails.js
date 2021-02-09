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
    this.SrcMovie() = this.SrcMovie().bind(this);
    this.remover = this.remover.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
  }

  componentDidMount() {
    this.SrcMovie();
  }

  redirectNotFound() {
    const {
      history: { push },
    } = this.props;
    push('/notfound');
  }

  async SrcMovie() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const data = await movieAPI.getMovie(id);

    this.setState({ movie: data });

    if (!data) {
      return this.redirectNotFound();
    }
    this.setState({ done: true });
  }

  remover() {
    const {
      movie: { id },
    } = this.state;
    movieAPI.deleteMovie(id);
  }

  LinksRender() {
    const {
      movie: { id },
    } = this.state;
    return (
      <>
        <Link to="/" onClick={ this.remover }>
          {' '}
          DELETAR
        </Link>
        <br />
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <br />
        <Link to="/">VOLTAR</Link>
      </>
    );
  }

  renderDetails() {
    const {
      movie: { title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;
    return (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        {this.LinksRender()}
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
