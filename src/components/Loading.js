import React, { Component } from 'react';
import { ReactComponent as LoadingSvg } from './Loading.svg';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <span className="loading-msg">Carregando...</span>
        <LoadingSvg />
      </div>
    );
  }
}

export default Loading;
