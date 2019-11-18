import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({
  style,
  recipes,
  favorites,
  ...props
}) => (
  <div style={style}>
    <ul className="list-reset">
      {recipes.map(recipe => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          favorited={favorites.includes(recipe.id)}
          {...props}
        />
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.array,
  favorites: PropTypes.array,
};

RecipeList.defaultProps = {
  recipes: [],
  favorites: [],
};

export default RecipeList;
