import React from 'react';
import HyperLink from './containers/HyperLink';

const Footer = () => (
  <footer>
    <div className="mt3">
      <div className="phantom" />
      <div className="footer">
        <HyperLink to="/" activeClassName="bg-black">Welcome</HyperLink>
        <HyperLink to="/about" activeClassName="bg-black">About</HyperLink>
      </div>
    </div>
  </footer>
);

export default Footer;
