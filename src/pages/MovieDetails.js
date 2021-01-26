import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchId = this.fetchId.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.state = {
      movie: [],
      loading: true,
      redirect: false,
    };
  }

  componentDidMount() {
    this.fetchId();
  }

  handleClickDelete() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  async fetchId() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        this.setState({
          loading: false,
          movie: await movieAPI.getMovie(id),
        });
      },
    );
  }

  redirectHome() {
    this.setState({ redirect: true });
  }

  render() {
    const { loading, movie, redirect } = this.state;
    if (loading) { return <Loading />; }
    if (redirect) { return <Redirect to="/" />; }
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/" className="around">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` } className="around">EDITAR</Link>
        <Link to="/" onClick={ this.handleClickDelete } className="around">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
