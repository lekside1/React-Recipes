import React, { useState, useEffect } from 'react';
import { Spring } from 'react-spring/renderprops';
import { Switch, Redirect } from 'react-router-dom';

const Welcome = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setRedirect(true), 3000);
  });

  return (
    redirect
      ? <Switch><Redirect to="/home" /></Switch>
      : (
        <Spring
          from={{ opacity: 0, marginLeft: -500 }}
          to={{ opacity: 1, marginLeft: 0 }}
          config={{ delay: 500, duration: 1000 }}
        >
          {props => (
            <div>
              <h1 style={props} className="h1 center bg-gray">Welcome to MyRecipes App</h1>
            </div>
          )}
        </Spring>
      )
  );
};

export default Welcome;
