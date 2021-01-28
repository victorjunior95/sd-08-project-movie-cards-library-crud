import React, { Component } from 'react';

import Error404 from '../components/img-components/404-error.png';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="404-error" className="error-404">
        <img src={ Error404 } alt="404 Error" className="error-404-img" />
        <p>Página não encontrada</p>
      </div>
    );
  }
}

export default NotFound;
