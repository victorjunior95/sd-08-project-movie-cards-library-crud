import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderStorylineInput = this.renderStorylineInput.bind(this);
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
      <label className="form-label" htmlFor="movie_title">
        <h4>Título</h4>
        <input
          className="validate form-control"
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          value={ title }
          onChange={ (event) => this.updateMovie('title', event.target.value) }
        />

      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <label className="form-label" htmlFor="movie_subtitle">
        <h4>Subtítulo</h4>
        <input
          className="validate form-control"
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={ subtitle }
          onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
        />

      </label>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <label className="form-label" htmlFor="movie_image">
        <h4>Imagem</h4>
        <input
          className="validate form-control"
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={ imagePath }
          onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
        />

      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <label className="form-label" htmlFor="movie_storyline">
        <h4>Sinopse</h4>
        <textarea
          className="validate form-control"
          id="movie_storyline"
          value={ storyline }
          onChange={ (event) => this.updateMovie('storyline', event.target.value) }
        />

      </label>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <label className="form-label" htmlFor="movie_genre">
        <h4>Gênero</h4>
        <select
          className="validate form-control"
          id="movie_genre"
          value={ genre }
          onChange={ (event) => this.updateMovie('genre', event.target.value) }
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <label className="form-label" htmlFor="movie_rating">
        <h4>Avaliação</h4>
        <input
          className="validate form-control"
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={ 0.1 }
          min={ 0 }
          max={ 5 }
          value={ rating }
          onChange={ (event) => this.updateMovie('rating', event.target.value) }
        />
      </label>
    );
  }

  renderSubmitButton() {
    return (
      <div className="submit-container">
        <button
          className="btn btn-primary"
          type="button"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="form">
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
  movie: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired,
};

export default MovieForm;
