import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  }

  componentDidMount() {
    this.fetchMovie();
  }

  redirectNotFound() {
    const { push } = this.props.history;
    push('/notfound');
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const data = await movieAPI.getMovie(id);

    this.setState({ movie: data });

    if (!data) {
      return this.redirectNotFound();
    }
    this.setState({ done: true });
  }

  remover() {
    //
  }

  /* eslint-disable  */
  renderDetails() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    return (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <br />
        <Link to="/">VOLTAR</Link>
      </>
    );
  }
  /* eslint-enable  */

  render() {
    const { done } = this.state;
    return (
      <div data-testid="movie-details">{!done ? <Loading /> : this.renderDetails()}</div>
    );
  }
}

export default MovieDetails;
