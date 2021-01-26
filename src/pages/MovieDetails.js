import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieDetailsCard from '../components/movieDetailsCard';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() { // pega o id do filme selecionado pelo params q e o componente passado pela url ':id'
    const { match } = this.props;
    const { id } = match.params;
    this.acessarId(id); // chama a funcao
  }

  async acessarId(id) { // declara a funcao getMovie q vai pegar o id do filme q acessar pela url do details e setar como state atualizado
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, loading: true });
  }

  async deleteMovie(movieId) {
    await movieAPI.deleteMovie(movieId);
  }

  render() {
    const { movie } = this.state;
    const { id, title, storyline,
      imagePath, genre, rating,
      subtitle } = movie;
    const { loading } = this.state;
    return loading ? (
      <MovieDetailsCard
        id={ id }
        title={ title }
        storyline={ storyline }
        imagePath={ imagePath }
        genre={ genre }
        rating={ rating }
        subtitle={ subtitle }
        onClick={ () => this.deleteMovie(id) }
      />
    ) : (<Loading />);
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
