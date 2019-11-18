import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';

const Favorites = ({ state, toggleFavorite, ...props }) => (
  <div className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList
      recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
      favorites={state.favorites}
      onFavorited={toggleFavorite}
      {...props}
    />
  </div>
);

Favorites.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
  recipe: PropTypes.object,
};

export default Favorites;
