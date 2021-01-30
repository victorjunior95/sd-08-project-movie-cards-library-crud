import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    const { movie } = this.props;
    this.state = {
      ...movie,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.setState({
      shouldRedirect: true,
    });
  }

  updateField(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div>
        <label htmlFor="movie_title">
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate"
            value={ title }
            onChange={ (event) => this.updateField('title', event.target.value) }
          />
          Título
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <div>
        <label htmlFor="movie_subtitle">
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={ subtitle }
            onChange={ (event) => this.updateField('subtitle', event.target.value) }
          />
          Subtítulo
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row">
        <label htmlFor="movie_image">
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={ imagePath }
            onChange={ (event) => this.updateField('imagePath', event.target.value) }
          />
          Imagem
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div>
        <label htmlFor="movie_storyline">
          <textarea
            id="movie_storyline"
            value={ storyline }
            onChange={ (event) => this.updateField('storyline', event.target.value) }
          />
          Sinopse
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
            value={ genre }
            onChange={ (event) => this.updateField('genre', event.target.value) }
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
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ (event) => this.updateField('rating', event.target.value) }
          />
          Avaliação
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        teste
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
    id: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
