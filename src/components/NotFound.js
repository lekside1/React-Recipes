import React from 'react';
import { Link } from 'react-router-dom';
import ImageBackground from './ImageBackground';
import img from '../static/images/rickandmorty404.png'; /* image by https://www.reddit.com/user/Smugglers/ */

const NotFound = () => (
  <div className="outer-div">
    <ImageBackground src={img} alt="rickandmorty" style={{ width: '75%' }} />
    <Link to="/home" className="link">
      <button className="rounded bg-green btn-height" type="button">
        Dont Even Trip Dawg, Go home
      </button>
    </Link>
  </div>
);

export default NotFound;
