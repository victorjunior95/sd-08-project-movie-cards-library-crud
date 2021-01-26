import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ imagePath } />
        <div>
          <h4>{title}</h4>
          <p>{storyline}</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape().isRequired,
};

export default MovieCard;
