import React from 'react';
import PropTypes from 'prop-types';
import './MovieForm.css';

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
      <div className="edit-movie">
        <label className="label-edit-movie-title" htmlFor="movie_title">
          Título
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate input-edit-movie"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="edit-movie">
        <label className="label-edit-movie-title" htmlFor="movie_subtitle">
          Subtítulo
          <input
            className="input-edit-movie"
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="edit-movie">
        <label className="label-edit-movie-title" htmlFor="movie_image">
          Imagem
          <input
            className="input-edit-movie"
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="edit-movie">
        <label className="label-edit-movie-title" htmlFor="movie_storyline">
          Sinopse
          <textarea
            className="input-edit-movie"
            id="movie_storyline"
            value={ storyline }
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSelect() {
    const { genre } = this.state;
    return (
      <select
        className="input-edit-movie"
        id="movie_genre"
        value={ genre }
        onChange={ (event) => this.updateMovie('genre', event.target.value) }
      >
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
        <option value="fantasy">Fantasia</option>
      </select>
    );
  }

  renderGenreSelection() {
    return (
      <div className="edit-movie">
        <label className="label-edit-movie-title" htmlFor="movie_genre">
          Gênero
          {this.renderSelect()}
        </label>
      </div>
    );
  }

  renderOnleInputForRating() {
    const { rating } = this.state;
    return (
      <input
        className="input-edit-movie"
        placeholder="Dê a avaliação do filme"
        id="movie_rating"
        type="number"
        step={ 0.1 }
        min={ 0 }
        max={ 5 }
        value={ rating }
        onChange={ (event) => this.updateMovie('rating', event.target.value) }
      />
    );
  }

  renderRatingInput() {
    return (
      <div className="edit-movie">
        <label className="label-edit-movie-title" htmlFor="movie_rating">
          Avaliação
          {this.renderOnleInputForRating()}
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="edit-movie">
        <button type="button" onClick={ this.handleSubmit }>
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
