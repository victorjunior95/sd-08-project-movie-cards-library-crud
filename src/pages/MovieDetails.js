import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = props;
    this.state = {
      id,
      loading: true,
      movie: {},
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleDelete() {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
  }

  fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const { id } = this.state;
        const movie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie,
        });
      },
    );
  }

  renderMovieInfo(movie) {
    const { title, storyline, genre, rating, subtitle } = movie;

    return (
      <>
        <h2>{ `Title: ${title}` }</h2>
        <h3>{ `Subtitle: ${subtitle}` }</h3>
        <h4>{ `Genre: ${genre}` }</h4>
        <h5>{ `Rating: ${rating}` }</h5>
        <p>{ `Storyline: ${storyline}` }</p>
      </>
    );
  }

  render() {
    const { loading, movie } = this.state;
    const { imagePath, id } = movie;
    return (
      <div>
        {
          loading ? <Loading />
            : (
              <div data-testid="movie-details">
                <img alt="Movie Cover" src={ `../${imagePath}` } />
                {this.renderMovieInfo(movie)}
                <Link to="/">VOLTAR</Link>
                <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              </div>
            )
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
