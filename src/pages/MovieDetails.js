import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.informount = this.informount.bind(this);
    this.datamovie = this.datamovie.bind(this);
    this.infomountaux = this.infomountaux.bind(this);
    this.state = {
      info: [],
    };
  }

  componentDidMount() {
    this.datamovie();
  }

  datamovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.getMovie(id)
      .then((data) => (
        this.setState({
          info: data,
        })
      ));
  }

  infomountaux(useful) {
    const component = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${useful[2]}` } />
        <h2>{`${useful[0]}`}</h2>
        <p>{ `Subtitle: ${useful[5]}` }</p>
        <p>{ `Storyline: ${useful[1]}` }</p>
        <p>{ `Genre: ${useful[3]}` }</p>
        <p>{ `Rating: ${useful[4]}` }</p>
        <Link to={ `/movies/${useful[6]}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
    return component;
  }

  informount() {
    const { info } = this.state;
    let infomovie;
    if (info.length === 0) {
      infomovie = <Loading />;
    } else {
      const { title, storyline, imagePath, genre, rating, subtitle, id } = info;
      const useful = [title, storyline, imagePath, genre, rating, subtitle, id];
      infomovie = this.infomountaux(useful);
    }
    return infomovie;
  }

  render() {
    const infomovie = this.informount();
    return (
      <div>
        {infomovie}
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
