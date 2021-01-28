import React, { Component } from 'react';
import './css/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <p className="loading-text">Carregando...</p>
      </div>
    );
  }
}

export default Loading;
