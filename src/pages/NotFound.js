import React, { Component } from 'react';

import '../css/NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="404-error">
        <p className="page-not-found">Página não encontrada</p>
      </div>
    );
  }
}

export default NotFound;
