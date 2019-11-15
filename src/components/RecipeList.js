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
  favorites: PropTypes.array,
  recipes: PropTypes.array,
};

export default RecipeList;
