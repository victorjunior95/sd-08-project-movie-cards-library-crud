import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div>
        <label htmlFor="movie_title">
          Título
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate"
            defaultValue={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </label>

      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div>
        <label htmlFor="movie_subtitle">
          Subtítulo
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            defaultValue={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderBookmarkedInput() {
    const { bookmarked } = this.state;

    return (
      <div>
        <label htmlFor="movie_bookmarked">
          Bookmarked
          <input
            id="movie_bookmarked"
            type="checkbox"
            defaultChecked={ bookmarked }
            className="bookmarked-input"
            onChange={ (event) => this.updateMovie('bookmarked', event.target.checked) }
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_image">
          Imagem
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            defaultValue={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
        <label htmlFor="movie_storyline">
          Sinopse
          <textarea
            id="movie_storyline"
            maxLength="300"
            defaultValue={ storyline }
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="movie_genre">
          Gênero
          <select
            id="movie_genre"
            defaultValue={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="movie_rating">
          Avaliação
          <input
            className="rating-input"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            defaultValue={ rating }
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="button-container">
        <button
          type="button"
          className="green"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  renderCancelButton() {
    return (
      <div className="button-container">
        <Link
          to="/"
          className="red"
        >
          Cancel
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="form-container">
        <form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderBookmarkedInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderStorylineInput()}
          <div>
            {this.renderSubmitButton()}
            {this.renderCancelButton()}
          </div>
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = ({
  onSubmit: PropTypes.func,
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
    subtitle: PropTypes.string,
  }),
}).isRequired;

export default MovieForm;
