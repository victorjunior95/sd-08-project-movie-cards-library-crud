import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class SaveError extends Component {
  render() {
    const { status } = this.props;

    if (status !== 'OK') {
      return (<div className="loading">A EDIÇÃO NÃO FOI SALVO. TENTE NOVAMENTE</div>);
    }
    return (<div className="loading">FILME SALVO COM SUCESSO</div>);
  }
}

SaveError.propTypes = {
  status: PropTypes.string.isRequired,
};

export default SaveError;
