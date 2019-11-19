import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const FooterLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 m2 white rounded"
    activeClassName="bg-black"
    {...props}
  >
    {children}
  </NavLink>
);

const Footer = () => (
  <footer>
    <div>
      <div className="phantom" />
      <div className="footer">
        <FooterLink to="/">Welcome</FooterLink>
        <FooterLink to="/about">About</FooterLink>
      </div>
    </div>
  </footer>
);

FooterLink.propTypes = {
  children: PropTypes.node,
};

export default Footer;
