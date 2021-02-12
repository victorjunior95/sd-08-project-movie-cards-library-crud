import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Rating from '../components/Rating';

import './MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this._isMounted = true;
    this.populateDetails(id);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async onDeleteMovie(id) {
    if (this._isMounted) this.setState({ loading: true });
    await movieAPI.deleteMovie(id);
    if (this._isMounted) {
      this.setState({
        loading: false,
      });
    }
  }

  async populateDetails(id) {
    const response = await movieAPI.getMovie(id);
    if (this._isMounted) {
      this.setState({
        loading: false,
        movie: response,
      });
    }
  }

  renderCardImg() {
    const {
      movie: { imagePath },
    } = this.state;
    return (
      <img
        alt="Movie Cover"
        className="movie-card-image"
        src={ `../${imagePath}` }
      />
    );
  }

  renderButtons() {
    const { movie: { id, rating },
    } = this.state;
    return (
      <>
        <Link className="details-button" to={ `/movies/${id}/edit` }>
          EDITAR
        </Link>
        <Link className="details-button" to="/">VOLTAR</Link>
        <Link
          className="details-button"
          onClick={ () => this.onDeleteMovie(id) }
          to="/"
        >
          DELETAR
        </Link>
        <Rating rating={ rating } />
      </>
    );
  }

  renderMovieCard() {
    const {
      movie: { storyline, genre, subtitle, title },
    } = this.state;
    return (
      <div className="movie-card-details" data-testid="movie-details">
        {this.renderCardImg()}
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">
            {title}
          </h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <p className="movie-card-genre">{`Genre: ${genre}`}</p>
        </div>
        <div className="movie-card-rating">{this.renderButtons()}</div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    if (!loading) {
      return (
        <div className="movie-details-container">{this.renderMovieCard()}</div>
      );
    }
    return <Loading />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
