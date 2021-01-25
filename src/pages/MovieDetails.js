import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieState: undefined,
      load: 1,
    };
  }

  componentDidMount() {
    this.buscaMovie();
  }

  async buscaMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movieState: movie, load: 0 });
    console.log(movie);
  }

  exibe() {
    const { movieState } = this.state;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${movieState.imagePath}` } />
        <p>{ movieState.title }</p>
        <p>{ `Subtitle: ${movieState.subtitle}` }</p>
        <p>{ `Storyline: ${movieState.storyline}` }</p>
        <p>{ `Genre: ${movieState.genre}` }</p>
        <p>{ `Rating: ${movieState.rating}` }</p>
        <Link to={ `/movies/${movieState.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { load } = this.state;
    return (
      <div data-testid="movie-details">
        {load && <Loading /> }
        {!load && this.exibe()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
