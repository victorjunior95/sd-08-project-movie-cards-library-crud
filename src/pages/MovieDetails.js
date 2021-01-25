import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      details: {},
    };

    this.fetchDetails = this.fetchDetails.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.fetchDetails(id);
  }

  fetchDetails(id) {
    this.setState({ loading: true }, async () => {
      const details = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        details,
      });
    });
  }

  links(id) {
    return (
      <div className="links">
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to={ { pathname: '/', deleteMovie: id } }>DELETAR</Link>
      </div>
    );
  }

  render() {
    const { details, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = details;
    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : (
          <div>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p>{title}</p>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            {this.links(id)}
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MovieDetails;
