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
      isLoading: true,
      shouldRedirect: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((answer) => {
      this.setState({
        movie: answer,
        isLoading: false,
      });
    });
  }

  handleDelete() {
    const { movie: { id } } = this.state;
    // const { match: { params: { id } } } = this.props;
    // console.log(id);
    movieAPI.deleteMovie(id).then(() => {
      // console.log(resolve);
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { movie, isLoading, shouldRedirect } = this.state;
    if (isLoading) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.handleDelete }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.defaultProps = {
  match: '',
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default MovieDetails;
