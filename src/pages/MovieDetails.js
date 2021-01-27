import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      shouldRedirect: false,
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState(
      { loading: true },
      async () => {
        const requestMovie = await movieAPI.getMovie(id);
        // console.log(requestMovie);
        this.setState({
          loading: false,
          movie: requestMovie,
        });
      },
    );
  }

  async fetchDelete() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    await movieAPI.deleteMovie(id);
    this.setState({
      shouldRedirect: true,
    });
  }

  // async fetchDelete() {
  //   const { id } = this.props.match.params
  //   this.setState(
  //     {loading:true },
  //     async () => {
  //       await movieAPI.deleteMovie(id);
  //       // console.log(requestMovie);
  //       this.setState({
  //         loading:false,
  //         shouldRedirect: true,
  //       })
  //     }
  //   )
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }

  renderInformation = () => {
    const { movie:
      { title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }

  renderMovie = () => {
    const { match: { params: { id } } } = this.props;
    const { movie } = this.state;
    return (
      <>
        {this.renderInformation()}
        <Link
          to={ { pathname: `/movies/${id}/edit`,
            state: { updatedMovie: movie } } }
          movie={ movie }
        >
          EDITAR
        </Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.fetchDelete() }>DELETAR</Link>
      </>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const loadingElement = <div>Carregando...</div>;
    const { loading } = this.state;

    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="movie-details">
        {loading ? loadingElement : this.renderMovie()}
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
