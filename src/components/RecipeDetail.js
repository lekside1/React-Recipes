import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose, branch, renderComponent } from 'recompose';


const LoadingState = ({ style, className }) => (
  <p
    style={style}
    className={classNames('h3 p2 bg-gray italic center', className)}
  >
    Loading recipe...
  </p>
);

const ZeroState = ({ style, className }) => (
  <p
    style={style}
    className={classNames('h3 p2 bg-gray italic center', className)}
  >
    No recipe selected
  </p>
);


const RecipeDetail = ({ recipe, style, className }) => {
  const currentLoc = window.location.pathname;

  return (
    <div style={style} className={classNames('p2 bg-gray', className)}>
      <h2 className="h2">{recipe.name}</h2>
      <div className="flex flex-column">
        <img src={recipe.image} alt={recipe.name} className="fit" />
        <div>
          <span>{recipe.category} </span>
          <span>{recipe.calories} cal</span>
        </div>
        {recipe.ingredients && (
          <div>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}
        {recipe.steps && (
          <div>
            <h3>Steps</h3>
            <ol>{recipe.steps.map(step => <li key={step}>{step}</li>)}</ol>
          </div>
        )}
        <div>
          {recipe && (
            currentLoc === `/recipe/${recipe.id}`
              ? (
                <Link to="/home" className={classNames('text-decoration-none bg-lime')}>
                  <span role="img" aria-label="less-detail">➖</span>
                </Link>
              )
              : (
                <Link to={`/recipe/${recipe.id}`} className={classNames('text-decoration-none bg-lime')}>
                  <span role="img" aria-label="more-detail">➕</span>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
};

RecipeDetail.defaultProps = {
  recipe: {},
  style: {},
  className: '',
};

LoadingState.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

LoadingState.defaultProps = {
  style: {},
  className: '',
};

ZeroState.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};
ZeroState.defaultProps = {
  style: {},
  className: '',
};

export default compose(
  branch(props => props.loading, renderComponent(LoadingState)),
  branch(props => !props.recipe, renderComponent(ZeroState)),
)(RecipeDetail);
