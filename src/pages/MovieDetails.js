import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
      deletedMovie: false,
    };
    this.renderDetails = this.renderDetails.bind(this);
    this.dltMovie = this.dltMovie.bind(this);
  }

  componentDidMount() {
    this.getThisMovie();
  }

  async getThisMovie() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const gotMovie = await getMovie(id);
    this.setState({
      movie: gotMovie,
      loading: false,
    });
  }

  dltMovie() {
    const { match: { params: { id } } } = this.props;
    const { deleteMovie } = movieAPI;
    const deleteThisMovie = deleteMovie(id);
    this.setState({
      movie: deleteThisMovie,
      deletedMovie: true,
    });
  }

  renderDetails() {
    const { match: { params: { id } } } = this.props;
    const { movie, deletedMovie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (deletedMovie) return <Redirect to="/" />;
    return (
      <section data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Title: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="cntnr"><Link to="/">VOLTAR</Link></div>
        <div className="cntnr"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></div>
        <div className="cntnr"><Link to="/" onClick={ this.dltMovie }>DELETAR</Link></div>
      </section>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;
    return (
      <div>
        {loading ? <Loading /> : this.renderDetails()}
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
