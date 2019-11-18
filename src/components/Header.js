import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 mx2 white rounded text-decoration-none"
    activeClassName="bg-gray"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => (
  <header className="flex items-center justify-between px4">
    <h1 className="h1"><Link to="/" className="text-decoration-none">🍽</Link> MyRecipes</h1>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorite</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
