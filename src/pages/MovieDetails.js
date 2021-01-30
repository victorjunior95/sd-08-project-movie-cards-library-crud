import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      shouldRedirect: false,
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const requestMovie = await movieAPI.getMovie(id);
        // console.log(requestMovie);
        this.setState({
          loading: false,
          movie: requestMovie,
        });
      },
    );
  }

  async fetchDelete() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
    this.setState({
      shouldRedirect: true,
    });
  }

  renderLinks = () => {
    const { match: { params: { id } } } = this.props;
    const { movie } = this.state;
    return (
      <>
        <Link
          to={ {
            pathname: `/movies/${id}/edit`,
            state: { updatedMovie: movie } } }
          movie={ movie }
        >
          EDITAR
        </Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.fetchDelete() }>
          DELETAR
        </Link>
      </>
    );
  }

  renderMovie = () => {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        {this.renderLinks()}
      </>
    );
  }

  render() {
    const { loading } = this.state;

    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : this.renderMovie()}
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
