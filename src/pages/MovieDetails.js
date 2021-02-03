import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        movie: data,
        loading: false,
      });
    });
    this.handleDelete = this.handleDelete.bind(this);
  }

  // async get(id) {
  //   const movie = await movieAPI.getMovie(id);
  //   this.setState({ movie, loading: true });
  // }

  handleDelete() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id).then(() => this.setState({ shouldRedirect: true }));
  }

  // renderbotao(id) {
  //   return (

  //     <button type="button" onClick={ () => this.deleteMovie(id) }>
  //       <Link to="/">DELETAR</Link>
  //     </button>
  //   );
  // }

  render() {
    const { movie: { id, title, storyline, imagePath, genre, rating, subtitle,
    }, loading, shouldRedirect } = this.state;
    if (loading) return <Loading />;

    if (shouldRedirect) return <Redirect />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link onClick={ this.handleDelete } to="/">DELETAR</Link>
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
