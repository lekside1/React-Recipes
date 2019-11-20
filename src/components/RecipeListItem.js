import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const RecipeListItem = ({
  recipe,
  favorited,
  onClick,
  onFavorited,
}) => (
  <li
    key={recipe.id}
    className="py2 border-bottom border-bottom-dashed pointer nowrap"
    onClick={() => onClick(recipe.id)}
  >
    <Checkbox
      active={favorited}
      onClick={e => {
        e.stopPropagation();
        onFavorited(recipe.id);
      }}
    />
    <span>{recipe.name} </span>
    <span>{recipe.category}</span>
    <span>
      {favorited
        ? (
          <Link to={`/recipe/${recipe.id}`} className="text-decoration-none">
            <span
              className="ml1"
              onClick={() => onClick(recipe.id)}
              role="img"
              aria-label="detail"
            >
              ➕
            </span>
          </Link>
        )
        : ''}
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
