import React from 'react';
import { Link } from 'react-router-dom';
import HyperLink from './HyperLink';

const Header = () => (
  <header className="flex items-center justify-between px4 mb1">
    <h1 className="h1"><Link to="/" className="text-decoration-none">🍽</Link> MyRecipes</h1>
    <nav>
      <HyperLink to="/home">Home</HyperLink>
      <HyperLink to="/favorites">Favorites</HyperLink>
    </nav>
  </header>
);

export default Header;
