import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Checkbox from './containers/Checkbox';

const RecipeListItem = ({
  recipe,
  favorited,
  onClick,
  onFavorited,
}) => (
  <li
    key={recipe.id}
    className="py2 border-bottom border-bottom-dashed pointer nowrap hvrList"
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
    <span className="ml1">
      {favorited
        ? (
          <Link to={`/recipe/${recipe.id}`} className="text-decoration-none hvrLink border-rad">
            <span
              className="plus-minus"
              onClick={() => onClick(recipe.id)}
              role="img"
              aria-label="detail"
            >➕
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
