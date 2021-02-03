import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieDetails.css';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fecthMovie();
  }

  fecthMovie() {
    this.setState({ loading: true }, async () => {
      const { match } = this.props;
      const requestMovie = await movieAPI.getMovie(match.params.id);
      this.setState({ movie: requestMovie, loading: false });
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading } = this.state;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div className="movie-details" data-testid="movie-details">
        {loading ? (
          <Loading />
        ) : (
          <div className="container-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <p className="title">{`Title: ${title}`}</p>
            <p className="subtitle">{`Subtitle: ${subtitle}`}</p>
            <p className="storyline">{`Storyline: ${storyline}`}</p>
            <p className="genre">{`Genre: ${genre}`}</p>
            <p className="rating">{`Rating: ${rating}`}</p>
            <div className="links-to">
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
              <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>
                DELETAR
              </Link>
            </div>

          </div>
        )}
      </div>
    );
  }
}

export default MovieDetails;
