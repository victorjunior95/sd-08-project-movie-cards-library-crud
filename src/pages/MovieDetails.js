import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.callMovie = this.callMovie.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
    this.state = {
      movie: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.callMovie();
  }

  callMovie() {
    const { match: { params: { id } },
    } = this.props;
    console.log(id);
    this.setState({
      loading: true,
    }, async () => {
      await movieAPI.getMovie(id)
        .then((response) => this.setState({
          movie: response,
          loading: false,
        }));
    });
  }

  renderMovie() {
    const { movie: {
      storyline, imagePath, genre, rating, subtitle, title } } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/" className="buttons">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` } className="buttons">EDITAR</Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) } className="buttons">
          DELETAR
        </Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="movie-details">
        { loading ? <Loading />
          : this.renderMovie()}
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
