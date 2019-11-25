import React from 'react';
import PropTypes from 'prop-types';

const ImageBackground = ({ src, alt, style }) => (
  <img src={src} alt={alt} style={style} />
);

ImageBackground.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
};

export default ImageBackground;
