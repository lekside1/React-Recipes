import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeListItem = ({
  recipe,
  favorited,
  onClick,
  onFavorited,
}) => (
  <li
    key={recipe.id}
    className="py2 border-bottom border-bottom-dashed pointer"
    onClick={() => onClick(recipe.id)}
  >
    <span
      className="mr1"
      onClick={e => {
        e.stopPropagation();
        onFavorited(recipe.id);
      }}
      role="img"
      aria-label="favorite"
    >
      {favorited ? '✅' : '⬜️'}
    </span>
    <span>{recipe.name} </span>
    <span>{recipe.category}</span>

    <span
      className="ml1"
      onClick={() => (onClick(recipe.id))}
      role="img"
      aria-label="more-details"
    >
      <Link className="text-decoration-none" to={`/recipe/${recipe.id}`}>
        {favorited ? '➕' : ''}
      </Link>
    </span>
  </li>
);

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  favorited: PropTypes.bool,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
};

RecipeListItem.defaultProps = {
  recipe: {},
  onClick: () => {},
  onFavorited: () => {},
};

export default RecipeListItem;