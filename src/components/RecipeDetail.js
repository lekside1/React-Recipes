import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeDetail = props => {
  if (!props.recipe) {
    return (
      <p
        style={props.style}
        className={classNames('h3 p2 bg-gray italic center', props.className)}
      >
        Please select a recipe to see the detail.
      </p>
    );
  }

  const location = window.location.pathname;

  return (
    <div
      style={props.style}
      className={classNames('p2 bg-gray', props.className)}
    >
      <h2 className="h2">{props.recipe.name}</h2>
      <img className="fit" src={props.recipe.image} alt={props.recipe.name} />
      <div>
        <span>{props.recipe.category} </span>
        <span>{props.recipe.calories} cal</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {props.recipe.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {props.recipe.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
        {location === `/recipe/${props.recipe.id}`
          ? <Link to="/" className="text-decoration-none"><span role="img" aria-label="less-detail">➖</span></Link>
          : <Link to={`/recipe/${props.recipe.id}`} className="text-decoration-none"><span role="img" aria-label="more-detail">➕</span></Link>}
      </ol>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RecipeDetail;
