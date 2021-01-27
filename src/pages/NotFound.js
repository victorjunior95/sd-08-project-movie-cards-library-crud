import React, { Component } from 'react';
import notFound from '../images/notFound.jpeg';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <p data-testid="404-error">Página não encontrada</p>
        <img src={ notFound } alt="Erro 404" />
      </div>
    );
  }
}

export default NotFound;
