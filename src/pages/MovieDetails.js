import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: [],
    };
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  delete() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  async update() {
    const { match: { params: { id } } } = this.props;
    const promise = await movieAPI.getMovie(id);
    const data = await promise;
    this.setState({
      data,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    const { data:
      { storyline, imagePath, genre, rating, subtitle, title, id } } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ `Title: ${title}` }</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.delete }>DELETAR</Link>
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
