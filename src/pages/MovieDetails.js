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
    const { id } = this.props.match.params;
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
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
    this.setState({
      shouldRedirect: true,
    });
  }

  renderLinks = () => {
    const { id } = this.props.match.params;
    return (
      <>
        <Link
          to={ {
            pathname: `/movies/${id}/edit`,
            state: { updatedMovie: this.state.movie } } }
          movie={ this.state.movie }
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
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

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
