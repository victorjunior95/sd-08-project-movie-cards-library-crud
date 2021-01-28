import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';

export default class Delete extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props;

    this.state = {
      id,
    };
    this.deleteCard = this.deleteCard.bind(this);
  }

  async deleteCard() {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
  }

  render() {
    return (
      <Link
        to="/"
        onClick={ this.deleteCard }
        className="handler-card delete"
      >
        DELETAR
      </Link>
    );
  }
}

Delete.propTypes = ({
  id: PropTypes.number,
}).isRequired;
