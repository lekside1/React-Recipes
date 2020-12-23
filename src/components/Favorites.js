import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import useSearchRecipes from './SearchRecipes';
import SearchBar from './containers/SearchBar';

const Favorites = ({ state, toggleFavorite, ...props }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    setFavoriteRecipes(state.recipes.filter(r => state.favorites.includes(r.id)));
  }, [state.recipes]);

  const { recipeList, searchValue, onInputSearchValue } = useSearchRecipes(favoriteRecipes);

  return (
    <div className="px4 flex">
      <div style={{ flex: 3 }} className="p1">
        <h2 className="h2">Favorites</h2>
        <SearchBar
          searchValue={searchValue}
          onInputSearchValue={onInputSearchValue}
        />
        <RecipeList
          recipes={recipeList || favoriteRecipes}
          favorites={state.favorites}
          onFavorited={toggleFavorite}
          {...props}
        />
      </div>
    </div>
  );
};

Favorites.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
  recipe: PropTypes.object,
};

Favorites.defaultProps = {
  state: {},
  toggleFavorite: () => {},
};

export default Favorites;
