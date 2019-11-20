import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HyperLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 mx2 white rounded text-decoration-none"
    activeClassName="bg-gray"
    {...props}
  >
    {children}
  </NavLink>
);

HyperLink.propTypes = {
  children: PropTypes.node,
};

export default HyperLink;
