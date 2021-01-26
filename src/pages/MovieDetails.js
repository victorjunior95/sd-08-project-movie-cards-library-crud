import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    console.log(location);
    const matchMovieId = location.pathname.match(/\d+/g);
    const id = parseInt(matchMovieId, 10);
    this.state = {
      loading: true,
      id,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    console.log(id);
    movieAPI.getMovie(id)
      .then((resolve) => this.setState({ movie: resolve, loading: false }));
  }

  // componentWillUnmount() {
  //   const { id } = this.state;
  //   movieAPI.deleteMovie(id).then((resolve) => resolve);
  // }

  handleDelete(id) {
    movieAPI.deleteMovie(id).then((resolve) => resolve);
  }

  renderMovieDetails() {
    const { movie, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div>
        <h1>{ title }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.handleDelete(id) }>DELETAR</Link>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    // const { movie } = this.state;
    // const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    // console.log(title);
    const { loading } = this.state;
    return (
      <div data-testid="movie-details">
        {
          loading ? <Loading /> : this.renderMovieDetails()
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
