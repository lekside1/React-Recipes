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

const phantom = {
  display: 'block',
  padding: '15px',
  height: '15px',
  width: 'inherit',
};

const style = {
  textAlign: 'left',
  padding: '15px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '15px',
  width: '100%',
};

const Footer = () => (
  <footer>
    <div>
      <div style={phantom} />
      <div style={style} className="bg-gray mt1">
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
