import React from 'react';
import Logo from '../netflix.jpg';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <img src={ Logo } alt="Logo TrybeFlix" className="header-logo" />
      </header>
    );
  }
}

export default Header;