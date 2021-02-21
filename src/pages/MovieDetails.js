import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        movie: data,
        loading: false,
        status: false,
      });
    });
  }

  deleteMovie() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id).then(this.setState({ status: true }));
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const { status } = this.state;
    if (status) return <Redirect to="/" />;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <h1>{`Title: ${title}`}</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <button type="button" onClick={ this.deleteMovie }>DELETAR</button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
