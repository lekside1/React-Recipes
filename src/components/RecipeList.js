import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({
  style,
  favorites,
  recipes,
  ...props
}) => (
  <div style={style}>
    <h2 className="h2">Recipes</h2>
    <ul className="list-reset">
      {recipes.map(recipe => (
        <RecipeListItem
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
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
};

export default RecipeList;
