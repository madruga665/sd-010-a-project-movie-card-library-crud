import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <Link to='/'>
          <h1 className="page-title">Movie Cards Library</h1>
        </Link>
      </header>
    );
  }
}

export default Header;
