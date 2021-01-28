import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    const { movie } = this.props;

    this.state = {
      movie,
    };
  }

  render() {
    const { movie } = this.state;
    const { title, subtitle, storyline, rating, imagePath, genre, id } = movie;
    return (
      <div className="movie-card-detail" data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="detail-container">
          <p className="detail-title">{ `Title: ${title}` }</p>
          <p className="detail-subtitle">{ `Subtitle: ${subtitle}` }</p>
          <p className="detail-storyline">{ `Storyline: ${storyline}` }</p>
          <p className="detail-genre">{ `Genre: ${genre}` }</p>
          <p className="detail-rating">{ `Rating: ${rating}` }</p>
          <div className="details-actions">
            <Link to="/" className="details">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` } className="details">EDITAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = ({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
  genre: PropTypes.string,
}).isRequired;
